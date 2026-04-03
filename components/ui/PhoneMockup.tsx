import { MapPin, Bell, Clock, Star, Navigation } from "lucide-react";

export default function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[280px]">
      {/* Phone frame */}
      <div className="bg-gray-900 rounded-[40px] p-3 shadow-2xl">
        {/* Notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-2xl z-10" />

        {/* Screen */}
        <div className="bg-white rounded-[32px] overflow-hidden">
          {/* Status bar */}
          <div className="bg-primary px-5 pt-8 pb-4">
            <div className="text-white text-xs font-medium opacity-80">MediTrajet</div>
            <div className="text-white text-lg font-bold mt-1">Votre trajet</div>
          </div>

          {/* Notification card */}
          <div className="px-4 -mt-3 relative z-10">
            <div className="bg-white rounded-2xl shadow-lg p-4 border border-gray-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Navigation className="w-5 h-5 text-secondary" />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold text-gray-900">Karim est en route</div>
                  <div className="text-xs text-gray-400">Arrive dans 8 minutes</div>
                </div>
                <div className="bg-secondary/10 text-secondary text-[10px] font-bold px-2.5 py-1 rounded-full">
                  En route
                </div>
              </div>

              {/* Mini map placeholder */}
              <div className="bg-blue-50 rounded-xl h-28 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-4 left-6 w-16 h-0.5 bg-gray-400 rotate-12" />
                  <div className="absolute top-8 left-2 w-20 h-0.5 bg-gray-400 -rotate-6" />
                  <div className="absolute top-14 left-8 w-24 h-0.5 bg-gray-400 rotate-3" />
                  <div className="absolute top-6 left-14 w-0.5 h-16 bg-gray-400 rotate-12" />
                  <div className="absolute top-2 left-24 w-0.5 h-20 bg-gray-400 -rotate-6" />
                </div>
                <div className="absolute top-6 left-8">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    <MapPin className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-6 right-8">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                    <MapPin className="w-3 h-3 text-white" />
                  </div>
                </div>
                <div className="absolute top-10 left-12 right-12 border-t-2 border-dashed border-primary/40" />
              </div>
            </div>
          </div>

          {/* Info cards */}
          <div className="px-4 py-3 space-y-2">
            <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
              <Clock className="w-4 h-4 text-primary" />
              <div>
                <div className="text-xs font-semibold text-gray-900">Prochain trajet</div>
                <div className="text-[10px] text-gray-400">Dialyse - Mercredi 14h00</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 rounded-xl p-3">
              <Star className="w-4 h-4 text-amber-500" />
              <div>
                <div className="text-xs font-semibold text-gray-900">Karim B. - 4.9/5</div>
                <div className="text-[10px] text-gray-400">Votre transporteur habituel</div>
              </div>
            </div>
          </div>

          {/* Bottom padding */}
          <div className="h-6" />
        </div>
      </div>
    </div>
  );
}
