import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const rawName = String(body.name || "").trim();
    const rawEmail = String(body.email || "").trim();
    const rawPhone = String(body.phone || "").trim();
    const rawRole = String(body.role || "").trim();
    const rawEtablissement = String(body.etablissement || "").trim();
    const rawMessage = String(body.message || "").trim();

    // Validation
    if (!rawName || !rawEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(rawEmail)) {
      return NextResponse.json(
        { error: "Nom et email valide requis" },
        { status: 400 }
      );
    }

    // Escape for HTML
    const name = escapeHtml(rawName);
    const email = escapeHtml(rawEmail);
    const phone = escapeHtml(rawPhone);
    const role = escapeHtml(rawRole);
    const etablissement = escapeHtml(rawEtablissement);
    const message = escapeHtml(rawMessage);

    const roleLabels: Record<string, string> = {
      directeur: "Directeur / gestionnaire",
      secretariat: "Secrétariat médical",
      patient: "Patient",
      transporteur: "Transporteur conventionné",
      partenaire: "Partenaire / Investisseur",
      autre: "Autre",
    };

    if (!process.env.RESEND_API_KEY) {
      console.log("RESEND_API_KEY not set — form data:", { name, email, phone, role, etablissement, message });
      return NextResponse.json({ success: true });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const fromAddress = process.env.RESEND_FROM || "MediTrajet <contact@meditrajet.fr>";

    // Email de notification interne
    await resend.emails.send({
      from: fromAddress,
      to: ["contact@meditrajet.fr"],
      subject: `Nouveau contact : ${name} (${roleLabels[role] || role})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color: #1E40AF;">Nouvelle demande de contact</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold; color: #374151;">Nom</td><td style="padding: 8px;">${name}</td></tr>
            <tr style="background: #F9FAFB;"><td style="padding: 8px; font-weight: bold; color: #374151;">Email</td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding: 8px; font-weight: bold; color: #374151;">Téléphone</td><td style="padding: 8px;"><a href="tel:${phone}">${phone}</a></td></tr>` : ""}
            ${etablissement ? `<tr style="background: #F9FAFB;"><td style="padding: 8px; font-weight: bold; color: #374151;">Établissement</td><td style="padding: 8px;">${etablissement}</td></tr>` : ""}
            <tr><td style="padding: 8px; font-weight: bold; color: #374151;">Rôle</td><td style="padding: 8px;">${roleLabels[role] || role}</td></tr>
            ${message ? `<tr style="background: #F9FAFB;"><td style="padding: 8px; font-weight: bold; color: #374151;" colspan="2">Message</td></tr><tr><td style="padding: 8px;" colspan="2">${message}</td></tr>` : ""}
          </table>
        </div>
      `,
    });

    // Email de confirmation au prospect
    await resend.emails.send({
      from: fromAddress,
      to: [rawEmail],
      subject: "Votre demande a bien été reçue - MediTrajet",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <div style="background: linear-gradient(135deg, #1E40AF, #10B981); padding: 30px; border-radius: 12px 12px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 24px;">MediTrajet</h1>
          </div>
          <div style="padding: 30px; background: #ffffff; border: 1px solid #E5E7EB; border-radius: 0 0 12px 12px;">
            <h2 style="color: #1E40AF; margin-top: 0;">Merci ${name} !</h2>
            <p style="color: #4B5563; line-height: 1.6;">
              Nous avons bien reçu votre message. Un membre de notre équipe vous recontactera
              <strong>dans les 24 heures</strong>.
            </p>
            <p style="color: #4B5563; line-height: 1.6;">
              En attendant, n'hésitez pas à consulter notre site pour en savoir plus sur
              comment MediTrajet simplifie le transport médical partagé.
            </p>
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #E5E7EB;">
              <p style="color: #9CA3AF; font-size: 12px; margin: 0;">
                L'équipe MediTrajet<br>
                contact@meditrajet.fr
              </p>
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi du message" },
      { status: 500 }
    );
  }
}
