"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  MapPin,
  Building2,
  Search,
  ChevronRight,
  X,
  List,
  Map,
} from "lucide-react";
import type { CityData } from "@/lib/seo-data/types";

/* ─── Region data with SVG paths ─────────────────────────────── */

interface RegionGeo {
  id: string;
  name: string;
  cities: number;
  path: string;
  /** Approximate center for label positioning */
  cx: number;
  cy: number;
}

const regionsGeo: RegionGeo[] = [
  { id: "Île-de-France", name: "Île-de-France", cities: 8, path: "M313.2,138.3 L316.4,137.7 L319.5,139.4 L321,137.7 L323.5,138.9 L325.2,138 L329.4,137.6 L331.8,136.1 L334.3,136.7 L335,138.1 L335.5,141.9 L338.8,144.4 L340.8,145.8 L341.8,148.1 L343.9,149.2 L344.7,150.6 L346.9,152 L347.8,152.9 L346.2,155.1 L344.4,156.6 L346.2,157.9 L347,159.6 L346.1,162.1 L349.1,163.2 L350.5,164.6 L348.3,166.3 L347.6,168.9 L345.4,169.5 L345.9,171.6 L344.8,174.1 L345.4,176.4 L343.9,177.2 L343.2,178.7 L340,178.4 L338,178.8 L334.4,178.7 L330.9,179.4 L330.6,181.2 L330.7,184.5 L328,188.3 L326.5,189.8 L323.9,191.1 L321.2,192 L319,190.9 L318.2,192.2 L316,193 L313.7,192.5 L311.1,192 L309.3,192.8 L309,190.6 L310,189.6 L309.9,187.1 L307.8,185.7 L306.6,182.9 L304.4,182.3 L302.4,181.1 L299.5,181.9 L298.2,180.3 L296.3,182.6 L292.4,183.1 L290.1,183.6 L288.7,182.4 L289.2,180.6 L289.3,177.8 L287.5,176.4 L287.3,173.9 L285.4,174.9 L283.8,173.3 L281.7,170.9 L282.1,168.4 L279.1,167 L279.3,164.9 L276.8,163.5 L275.3,160.6 L275.9,157.3 L273.9,154.8 L274,151.8 L272.8,150.1 L272.5,148.2 L271.3,147 L270.9,144 L270.1,141.9 L268.9,140.3 L270.4,139.9 L273.2,138.9 L275.2,138.4 L277,135.4 L277.7,130.8 L280,130.2 L280.8,132.9 L284.3,133.1 L285.9,133.6 L288.8,132.9 L290.3,132.8 L294.1,132 L297.4,132.9 L300.1,134.1 L302.4,132.2 L305.5,134.3 L308.6,135.1 L309.3,136.8 L313.2,138.3 Z", cx: 310, cy: 161 },
  { id: "Centre-Val de Loire", name: "Centre-Val de Loire", cities: 6, path: "M324.2,227.4 L325.9,233.9 L326.6,240.7 L330.1,249.8 L332,256 L331.7,264.1 L327.5,268.3 L321,272.4 L317.5,272.7 L312.5,276.6 L313.9,282.8 L309,283.8 L302.1,287.1 L298.6,290.1 L293.8,290.9 L289.5,289.2 L283.3,289.7 L279.8,292 L275.4,291.1 L271.8,289.9 L267.4,293.6 L263.3,293.1 L258.5,292.3 L256.8,286 L252.4,283.6 L248.4,280.2 L248.8,274.5 L244.3,268.9 L240.2,260.7 L234.8,257 L234.8,259.7 L229.9,261.2 L224.5,258.6 L224.4,254.1 L219.6,253.1 L218.1,251 L215.5,246.3 L215.9,240.9 L220,235.4 L219.9,231.3 L220.7,226 L222.9,222.2 L227.6,224.7 L228.2,220.5 L232.2,220.3 L235.5,218.9 L236.6,215.5 L241.8,209.9 L244.2,205.1 L244.6,200.6 L243.9,195.9 L248.3,192.3 L243.8,188.9 L242.7,181.6 L248.1,178.8 L249.1,172.8 L248.6,169.3 L245.8,166.6 L244.4,161.7 L247.8,159.4 L253.9,156.8 L257.5,155.1 L262.1,156.7 L265.5,153.3 L269.9,148.7 L271.3,147 L272.8,150.1 L273.9,154.8 L275.3,160.6 L279.3,164.9 L282.1,168.4 L283.8,173.3 L287.3,173.9 L289.3,177.8 L288.7,182.4 L292.4,183.1 L298.2,180.3 L302.4,181.1 L306.6,182.9 L309.9,187.1 L309,190.6 L311.1,192 L316,193 L319,190.9 L323.9,191.1 L330.2,192.4 L333.1,199.2 L331.5,204 L330.2,209.4 L328.6,212.2 L323.5,213.7 L325.9,218.9 L327.6,224.2 L324.8,225.5 L324.2,227.4 Z", cx: 275, cy: 222 },
  { id: "Bourgogne-Franche-Comté", name: "Bourgogne-FC", cities: 8, path: "M353.4,271.5 L350.7,274.9 L346.3,276.4 L343.2,274.8 L337.4,275.3 L330.9,271 L331,262.2 L329.9,253.6 L328.4,242.3 L325.9,233.9 L323.2,226.4 L328.1,224.6 L325.9,218.9 L325.7,213.2 L330.1,211.4 L329.3,206 L333.1,199.2 L328.7,191.3 L328,188.3 L330.5,180.6 L338,178.8 L343.2,177.5 L348.3,178.9 L351.8,184 L352.7,187.9 L354.9,192 L359,192.6 L362.7,199.1 L364.4,201.4 L368.4,204.1 L374.2,202.3 L377.1,203.9 L383.8,201.8 L388.5,199.9 L395.6,199.5 L399.1,202.3 L401.7,204.6 L405.2,209.6 L404.5,213.4 L407.6,216.6 L413.2,219.9 L418.1,222.6 L422.2,220.2 L428.4,216.8 L432.9,216.5 L432.8,211.1 L435.9,208 L440.7,204.2 L443.6,202 L446.1,201.2 L451.7,202.7 L457.7,202.9 L466.1,205.6 L472.4,206.8 L477.9,210.1 L482.8,214.1 L484.6,220 L488,225.6 L484.8,228.3 L481.5,233.9 L480.8,236.8 L485.7,238.5 L481.6,243.9 L473.8,251 L472.2,254.9 L465.2,258.8 L463,265.6 L460.5,271.5 L452,279.2 L449.5,285.2 L446.3,292.2 L441.1,297.9 L434.1,298.2 L429.6,297.3 L424.1,298.6 L422,294.9 L418.8,289.7 L413.1,284.9 L406.6,285.1 L402.1,291.3 L399.1,299.4 L396,304.1 L394,299.5 L391.7,299.2 L386.7,297.8 L381.8,303.1 L377.7,303.7 L372.9,304.2 L366.7,302.7 L364.4,297.3 L366.9,291.5 L364.6,285.9 L361.3,283.9 L357.8,282 L354.9,275.8 L353.4,271.5 Z", cx: 398, cy: 241 },
  { id: "Normandie", name: "Normandie", cities: 5, path: "M169.6,122.5 L176.5,120.3 L187.8,123.1 L195.4,123.7 L204.2,126.8 L215.8,122 L221.4,118.5 L223.5,116.9 L217.6,116.4 L215.8,112.2 L219.3,103.6 L225.3,100.5 L233.1,95.7 L240.7,93.2 L248.9,91 L259.6,87.2 L267.5,82.5 L270.7,84.7 L274.6,88.6 L280.2,96.7 L280.5,100.7 L278.9,103.9 L279.1,105.9 L279.9,110.8 L280.7,114.6 L281.6,115.9 L279.5,120.3 L281.6,125.7 L280,127.5 L277.3,134.1 L274.9,138 L269.5,139.3 L270.1,144.1 L269,147.2 L265.6,152.3 L263.2,156.1 L257.8,156 L255.3,157.2 L249.9,159 L244.9,161.1 L245.7,165.4 L249.2,168.5 L249.9,172.4 L249.6,177 L243.3,180.5 L245,187.8 L239.8,186.5 L235.3,186 L231.8,182.4 L227.7,179.7 L224.5,172.5 L218.8,175 L215.3,178.1 L210.8,178.2 L207.3,174 L204.9,167.8 L202.7,170.1 L198.7,171.8 L192.4,171.7 L187.1,172.2 L185.2,174.3 L182,173.4 L175.9,170.5 L171.5,170.9 L166.9,169.8 L161.5,171.6 L156.8,172.2 L153.6,168.7 L152.1,164.2 L157,164.1 L153.6,158.2 L152,153 L152.1,148.6 L152.5,142.8 L151.2,135.3 L149.7,130.6 L146.2,124.2 L142.2,117 L139.9,112 L140.9,105.7 L137.5,102.6 L141,102 L146.4,104 L150,105.9 L156.6,103.4 L163.8,103.1 L164.4,107.8 L162.3,112.1 L167.9,120.5 L169.6,122.5 Z", cx: 213, cy: 138 },
  { id: "Hauts-de-France", name: "Hauts-de-France", cities: 5, path: "M369.6,119.7 L367.5,121.3 L362.5,119.7 L360.9,122.5 L354,125 L354.7,130.9 L358.1,132.7 L354.3,134.4 L353.8,138.2 L354.7,140.7 L353.1,144.8 L351.2,147.3 L346.9,152 L343.9,149.2 L340.8,145.8 L335.5,141.9 L334.3,136.7 L329.4,137.6 L323.5,138.9 L319.5,139.4 L313.2,138.3 L308.6,135.1 L302.4,132.2 L297.4,132.9 L290.3,132.8 L285.9,133.6 L280.8,132.9 L279.1,127.7 L282.7,127.3 L281,121.8 L280.5,116.6 L281.5,113.6 L279.8,111.9 L279.5,107.3 L280,102.9 L279.5,101.1 L281,98.2 L277.9,90.4 L271.6,85.1 L268,81.7 L270.3,75.9 L275.9,74.9 L275.7,73.4 L272.4,69.6 L276.4,65.6 L273.7,60.3 L274.1,53.6 L274.6,43.7 L274.2,35.9 L279.8,32.1 L286.1,30.2 L294.6,28.3 L298.8,26.7 L306.8,25.4 L312.5,28.4 L313.8,33.6 L318.9,41 L323.2,44.4 L326.6,43.3 L332.5,41.5 L337.2,45 L338.4,48.1 L339.7,53.8 L345.8,56.7 L349.3,57.4 L353.9,59.2 L355.1,66.6 L358,65.7 L366.5,65.7 L372.5,68.7 L375.1,72.2 L372.7,78 L376.2,82.2 L373.8,86.4 L375.3,88.2 L377.4,93.9 L375.8,98.2 L376.4,101.3 L372.7,104.1 L369.4,106.9 L370.7,112 L370,117.1 L369.6,119.7 Z", cx: 323, cy: 94 },
  { id: "Grand Est", name: "Grand Est", cities: 11, path: "M376.8,88.1 L387.5,88.8 L394.9,80.3 L402.4,78 L399.4,84.8 L402.2,90.9 L404.8,97.1 L411.3,102 L419.3,105.4 L423.6,111.4 L429.4,113 L436.4,110.7 L442.8,114.2 L449.9,115.8 L459.3,116.6 L467,120.7 L469.9,126 L472.7,132.1 L477.5,130.8 L483.8,131.8 L489.9,135.9 L496.6,134.6 L502.9,134.8 L508.5,139.8 L517.5,140.9 L522.5,141.2 L530.2,145.4 L523.5,156.1 L516,164.7 L513.5,173.9 L509.7,187.2 L506.3,193.9 L506.5,205.6 L504.9,215.9 L503.5,226 L500.2,229.5 L493.4,233 L488.9,228.4 L484.1,221.7 L482.8,214.1 L477,210.7 L470,204.8 L461.9,203.2 L452.6,202.7 L446.1,201.2 L442.7,201.2 L440.1,205.7 L434.8,210.4 L433.3,215 L428.4,216.8 L420.9,221.8 L415.7,223 L409.7,219.6 L405.4,215.4 L405.2,209.6 L400.9,206 L398.5,201 L391.6,198.2 L385.1,202.4 L377.1,203.9 L372.1,204.2 L367.2,204 L361.9,200.9 L360.2,194.1 L354.9,192 L353.1,187.1 L351,182.4 L345.1,177.7 L344.7,169.8 L348.5,165.4 L347.2,160.8 L344.9,155.2 L349.5,147.9 L353.8,142.7 L351.8,139.5 L355.5,134 L356,131.1 L356.1,123.9 L361.5,120.2 L368.2,122.4 L369.4,116.1 L369,107.8 L373.3,103.5 L377,99 L377.6,91.2 L376.8,88.1 Z", cx: 426, cy: 162 },
  { id: "Pays de la Loire", name: "Pays de la Loire", cities: 5, path: "M117.7,231.5 L121.1,230.7 L123.9,228.5 L128.4,229 L131.7,224.4 L131.7,221.1 L135.1,218.8 L140.7,216.7 L146.2,217.2 L149.6,214.7 L154.7,211.4 L158,209.9 L164.7,212.8 L166.9,207.6 L168.2,202 L173.4,200.3 L172.3,194.9 L170.3,185 L172.1,178.1 L171.3,171.5 L175.3,171.7 L179.6,171.3 L183.6,175.1 L185.7,173.3 L191.6,172.9 L195.7,170.6 L202.4,171 L203.8,167.9 L206.5,170.5 L210.7,175.5 L213.7,178.3 L217.4,175.1 L221.3,172.9 L227.3,176.5 L229.6,182.5 L233.7,185.7 L239.1,185.4 L243.8,188.9 L248.3,192.3 L243.9,195.9 L244.6,200.6 L244.2,205.1 L241.8,209.9 L236.6,215.5 L235.5,218.9 L232.2,220.3 L228.2,220.5 L227.6,224.7 L222.9,222.2 L220.7,226 L219.9,231.3 L220,235.4 L215.9,240.9 L215.5,246.3 L212.5,248.1 L209.1,251.9 L206,253.2 L203.6,251.1 L198.1,252.1 L195,252.5 L191,256 L185.2,258 L179.8,258.3 L180.8,261 L182.6,266.1 L185.8,272.2 L188.2,276.4 L189.2,280.7 L188.7,284 L189,289.2 L189.3,290.6 L189.6,293.6 L186.9,296.2 L183.9,296.9 L180,296.2 L175.7,295.8 L175.1,294.2 L169.2,296.6 L166.2,297.8 L160,294.4 L155.3,292.5 L150.5,290.7 L142.7,286 L137.8,274.8 L130,267.6 L133.2,259.9 L134.2,252.9 L128.6,250.2 L129,247.6 L128.9,241.8 L123.8,243.6 L118.4,242.3 L115.3,236.6 L118,232.8 L117.7,231.5 Z", cx: 183, cy: 230 },
  { id: "Bretagne", name: "Bretagne", cities: 5, path: "M71.3,162.3 L75.5,157.2 L76.5,152.6 L83,153.2 L88.9,152.3 L94.7,153.4 L98.7,156.4 L101.4,161.5 L105.3,166.6 L109.3,170.8 L113.8,166.5 L119.5,163.3 L122.4,164.6 L128.7,167.1 L131.2,163.5 L135,166.4 L135.8,166.1 L136.7,160.8 L141.8,161.1 L148.6,165.1 L153.6,168.7 L157.6,173.6 L163.7,169.5 L169.1,170.2 L171.2,176.5 L170.3,185 L173.3,196.1 L170.2,200.6 L166.6,206.3 L164.7,212.8 L156.2,209.5 L151.2,212.8 L147.4,216.4 L140.7,216.7 L134.1,218.9 L132.1,222.7 L129.5,228.8 L123.9,228.5 L120,231.1 L116.2,231 L115.4,227.1 L110.2,226.3 L104.7,229.4 L100.3,225.1 L106,226.5 L106.3,220.8 L100.9,223.9 L93.1,224.9 L91.8,230.1 L90.6,222.5 L90.3,218.3 L90.1,217 L83.6,216.6 L77.5,215.5 L75.9,209.4 L75.9,213.6 L68.3,211.1 L61.9,209.3 L56.5,208.8 L50.4,207.9 L47.6,211.9 L44.5,208.2 L38.3,199.7 L32.8,198.7 L34,196.1 L40,194.3 L47.1,192.7 L46.3,188.9 L38.6,186.8 L37,186.2 L35.6,181.7 L38,183.1 L43.2,184.3 L49.4,183.1 L43.5,181.4 L41.2,178.1 L34.5,180.7 L28.2,181.2 L27.3,176.4 L28.6,169.7 L34.5,167.1 L38.6,164.5 L45.8,161.6 L53.8,160.3 L58.7,158.5 L61.8,162 L63.7,160.8 L69.6,160.5 L71.3,162.3 Z", cx: 93, cy: 190 },
  { id: "Nouvelle-Aquitaine", name: "Nlle-Aquitaine", cities: 12, path: "M267.7,294.4 L276.6,292.2 L285.8,289.6 L295.3,290.3 L302,294 L308.9,298.2 L311.7,309.6 L309.4,322.1 L309.4,329.3 L308.3,337.4 L310.6,349.5 L304.4,351 L298.2,358.4 L294,368.2 L288,374 L280.8,374.8 L273,369.8 L268.6,377.8 L263.1,384.1 L257.6,392.1 L252.5,401.4 L251.5,407.5 L247.6,411.6 L245.9,418.6 L241.5,424.3 L235.2,424.3 L226.7,427.6 L218.4,428.9 L213.1,431.8 L205.2,433.4 L204.1,444.8 L203.3,450.5 L209.5,453.9 L211.6,461 L211.1,468.5 L207.2,478.4 L202.7,485.1 L199.5,495.1 L191.9,497.5 L185.8,492.6 L178.1,487.9 L167.2,483.9 L161.7,479.3 L158.1,477.2 L154.6,469 L147.3,467.9 L152.4,458 L159.7,433.6 L166.3,393 L173.2,389.9 L165,389.7 L168,351 L172.6,340.8 L183.2,354.9 L187.7,365.3 L181.9,345.2 L171.1,334.9 L169.1,325.4 L170.4,314.8 L167.5,306.3 L168.8,299.8 L176.8,293.4 L181.6,294.9 L188.3,295 L188.1,290.5 L189.4,282.2 L187.5,274.2 L180.7,263.7 L183.4,257.6 L191.2,253.6 L199.7,252.2 L207.9,254 L214.3,248 L219.6,253.1 L224.5,258.6 L234.8,259.7 L240.2,260.7 L248.8,274.5 L252.4,283.6 L258.5,292.3 L267.4,293.6 L267.7,294.4 Z", cx: 221, cy: 364 },
  { id: "Occitanie", name: "Occitanie", cities: 13, path: "M282,510.1 L275.1,507 L270.1,507.7 L265.3,502.9 L257.9,502.2 L248.7,497.7 L238.8,495.7 L235.6,503.1 L226.8,501.5 L220.9,501.2 L213.9,502.7 L203.7,496.7 L201.8,485.4 L205.5,479.4 L211.1,472.4 L212.7,464.4 L210.4,459.2 L208.2,452.2 L202.2,450.5 L204.1,444.8 L203.8,434.3 L211.5,429.5 L215.7,432.4 L220.2,427.7 L230,426.9 L237.2,425.1 L242.1,422.6 L245.9,418.6 L248.4,411.3 L249.7,408 L253.8,404.1 L252.8,397 L260.3,389.5 L264.3,382.5 L267.5,376.6 L273,369.8 L280.7,374 L286.8,372.7 L293.4,375.3 L296.3,385.5 L298.4,391.8 L305.1,391.4 L312.2,384.1 L315.8,377.9 L320.5,377.8 L324.4,382.7 L326.8,389.9 L330.9,382.6 L336.1,379.2 L340.6,374.9 L345.9,378.3 L352.2,379.5 L357.8,380.7 L363.7,391.4 L367.7,402.3 L369.7,410.4 L377.1,413.1 L381.9,409.2 L385.2,409.5 L392.4,412.4 L395.7,417.9 L400.3,429.3 L392.6,436.1 L391.5,444.9 L385.3,447.6 L381.4,454.4 L373.1,455.3 L359.9,460.5 L348.8,470.2 L335.9,476.3 L330.7,495 L331.2,512.2 L335.1,516.6 L328.6,515.8 L321.3,518.9 L314,523 L307.1,521.3 L298.1,519.1 L289.8,522.2 L285.7,516.6 L280.1,511.4 L282,510.1 Z", cx: 293, cy: 441 },
  { id: "Auvergne-Rhône-Alpes", name: "Auvergne-RA", cities: 13, path: "M397.9,304.2 L402.1,291.3 L410.6,286.2 L418,290.7 L424.8,296.3 L431.6,294.9 L441.1,297.9 L451.7,293.3 L445.3,301.7 L448.7,305.6 L455.5,300.1 L461.1,293.8 L475.7,291.8 L477.7,300.1 L479.7,309.5 L484.6,316.6 L481.5,323 L478,332 L483.7,338.5 L489.8,347.2 L489.2,355.4 L481.2,361.7 L472.7,363.2 L464.9,365.2 L459.2,365.5 L454.9,371.6 L459,377.6 L451.8,379.8 L444.3,383.4 L438.5,388.6 L430.4,395.2 L426.4,400.5 L423.6,406.2 L430,410.9 L431.7,417.7 L428.3,418.8 L421.3,417.1 L412.7,414.5 L405.7,412.3 L397.2,410 L391.2,412 L383.2,412.1 L378.9,411.8 L372.6,409.3 L369.2,403.1 L363.7,391.4 L357,381.1 L349.9,381.2 L344.7,373.9 L337.9,376.6 L332.9,380.9 L328,391.7 L324.4,382.7 L320.3,376.3 L314.5,379 L309.7,389.1 L301.6,390.5 L296.2,388.6 L294.5,376.5 L294,368.2 L298.2,358.4 L304.4,351 L310.6,349.5 L308.3,337.4 L309.4,329.3 L309.4,322.1 L311.7,309.6 L308.9,298.2 L302,294 L307.6,284.6 L313.4,277.9 L319.7,273.3 L332.3,272.1 L342.5,275.2 L347.9,276.6 L353.4,271.5 L357.8,282 L362.4,286.2 L367.4,293.2 L364.4,302.5 L374.9,303.5 L381.8,303.1 L389.3,297.5 L396.2,300.9 L397.9,304.2 Z", cx: 389, cy: 345 },
  { id: "Provence-Alpes-Côte d'Azur", name: "PACA", cities: 6, path: "M481.9,391.2 L480.5,396.6 L480.2,401.9 L479.9,407.2 L482.2,411.6 L486.6,415.3 L492.3,418.9 L497.7,421.8 L503.4,420.4 L510.4,418.6 L511.5,424.8 L507.5,431.1 L503.7,435.3 L502.3,442.8 L497.8,444.4 L493.3,446.3 L489.3,449.4 L486,454.4 L482.1,456.9 L479.7,461.2 L474.8,461.5 L471.5,466.3 L469.9,470 L470.8,472.1 L466.7,475 L459.1,478.9 L454.5,479.2 L451.2,484.1 L446.4,481.3 L441.3,479.2 L437.6,481.2 L434.3,477.3 L429.7,476.4 L421.6,473.6 L420.6,470.3 L416.4,466.4 L407.2,466.1 L402.8,461.7 L400,466.9 L389.5,464.4 L387.7,459.7 L377,457.2 L385.2,452.4 L386.1,447.4 L392,446.3 L393.1,439.9 L395.7,433.9 L400.3,429.3 L396,424.1 L393.9,416.4 L392.9,409.7 L398.8,412.6 L403.9,413.6 L410.5,412.6 L412.4,415.4 L419.5,416.9 L424.1,421.8 L428.3,418.8 L432.7,420.2 L432.8,415.3 L431.1,411.4 L425.5,409.3 L422.7,404.3 L424.2,401.9 L430.3,401.6 L430.4,395.2 L437.1,391.2 L438.5,386.3 L444.4,383.9 L446.3,380.7 L452.8,379.5 L458.9,379.7 L457.9,374.4 L454.9,371.6 L455.2,364.2 L459.3,367.4 L463.8,366.2 L469,364.5 L471.2,370.2 L474.7,373.1 L478.6,380 L484.6,382.2 L486.4,387.8 L482.2,390.3 L481.9,391.2 Z", cx: 447, cy: 426 },
  { id: "Corse", name: "Corse", cities: 2, path: "M576.9,550.9 L576.5,554.3 L576.8,560.4 L576.3,562.3 L575,563.4 L572.4,565.2 L573.6,565.4 L575.4,565.9 L573,568.8 L572,571.6 L571.2,574 L570.1,576.2 L569.7,579 L567.8,578 L566.1,577.3 L565.3,575.7 L564.2,574.7 L562.2,573.5 L559.7,571.9 L558,571 L556.6,570.1 L555.1,568.8 L553.6,567.3 L553.1,565.4 L554.4,564 L556.2,563.1 L558,561.1 L555.1,560.1 L552.5,559.3 L552.5,557.6 L549.1,557.3 L550.8,555.6 L551.2,554.3 L552.9,552.5 L552.7,549.5 L552.8,547.2 L550.4,548.1 L547.4,548 L546.6,547.1 L546.4,544.5 L548.4,544.1 L549.3,541.3 L551.3,540.5 L550.4,539.2 L549,536.7 L547.6,535.9 L544.9,533.9 L545,532.1 L544.3,529.3 L549.3,527.8 L548.1,525.6 L546.8,525 L546.4,522.9 L544.3,523.8 L544.8,521.1 L546.1,519 L547.9,519.1 L548.3,514.7 L549.6,512.8 L550.5,511.1 L552,510.9 L553.7,510.3 L556.5,507.8 L557.5,507 L559,506.6 L563.7,504.9 L564.6,502 L567.8,500.8 L569.8,500.8 L573.8,503 L574.7,500.8 L574.5,497.1 L574.1,493.1 L574.7,490.7 L574.5,486 L577.3,485.3 L578.8,487.8 L579.4,491.1 L580.3,497.4 L578.6,504.4 L581.2,509.4 L582,513 L582.2,516.8 L581.9,520.9 L583,526.8 L582.9,531.6 L582.6,536.9 L579.4,542.1 L577.3,545.4 L576.7,550 L576.9,550.9 Z", cx: 562, cy: 537 },
];

/* ─── Props ───────────────────────────────────────────────────── */

interface MapExplorerProps {
  cities: CityData[];
  getHospitalCount: (slug: string) => number;
}

/* ─── Component ───────────────────────────────────────────────── */

export default function MapExplorer({
  cities,
  getHospitalCount,
}: MapExplorerProps) {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileView, setMobileView] = useState<"map" | "list">("map");

  /* Filtered cities */
  const filteredCities = useMemo(() => {
    let result = cities;

    if (selectedRegion) {
      result = result.filter((c) => c.region === selectedRegion);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.department.toLowerCase().includes(q) ||
          c.departmentCode.includes(q) ||
          c.postalCode.startsWith(q)
      );
    }

    return result.sort((a, b) => b.population - a.population);
  }, [cities, selectedRegion, searchQuery]);

  /* Count per region */
  const citiesPerRegion = useMemo(() => {
    const counts: Record<string, number> = {};
    cities.forEach((c) => {
      counts[c.region] = (counts[c.region] || 0) + 1;
    });
    return counts;
  }, [cities]);

  const handleRegionClick = (regionId: string) => {
    setSelectedRegion(selectedRegion === regionId ? null : regionId);
    setSearchQuery("");
    // On mobile, switch to list when region is selected
    if (window.innerWidth < 1024) {
      setMobileView("list");
    }
  };

  const clearFilter = () => {
    setSelectedRegion(null);
    setSearchQuery("");
  };

  const hoveredData = regionsGeo.find((r) => r.id === hoveredRegion);
  const selectedData = regionsGeo.find((r) => r.id === selectedRegion);

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
      {/* ─── Top bar ─── */}
      <div className="border-b border-gray-100 bg-gray-50/50 px-4 py-3 flex items-center gap-3 flex-wrap">
        {/* Search */}
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher une ville, un département..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              if (e.target.value.trim()) setSelectedRegion(null);
            }}
            className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary placeholder:text-gray-400"
          />
        </div>

        {/* Active filter chip */}
        {(selectedRegion || searchQuery) && (
          <button
            onClick={clearFilter}
            className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-sm font-medium px-3 py-2 rounded-lg hover:bg-primary/15 transition-colors"
          >
            {selectedRegion || `"${searchQuery}"`}
            <X className="w-3.5 h-3.5" />
          </button>
        )}

        {/* Result count */}
        <span className="text-sm text-gray-400 whitespace-nowrap">
          {filteredCities.length} ville{filteredCities.length > 1 ? "s" : ""}
        </span>

        {/* Mobile toggle */}
        <div className="flex lg:hidden border border-gray-200 rounded-lg overflow-hidden">
          <button
            onClick={() => setMobileView("map")}
            className={`px-3 py-2 text-sm font-medium flex items-center gap-1.5 transition-colors ${
              mobileView === "map"
                ? "bg-primary text-white"
                : "bg-white text-gray-500 hover:bg-gray-50"
            }`}
          >
            <Map className="w-3.5 h-3.5" />
            Carte
          </button>
          <button
            onClick={() => setMobileView("list")}
            className={`px-3 py-2 text-sm font-medium flex items-center gap-1.5 transition-colors ${
              mobileView === "list"
                ? "bg-primary text-white"
                : "bg-white text-gray-500 hover:bg-gray-50"
            }`}
          >
            <List className="w-3.5 h-3.5" />
            Liste
          </button>
        </div>
      </div>

      {/* ─── Split view ─── */}
      <div className="flex flex-col lg:flex-row" style={{ minHeight: 560 }}>
        {/* LEFT - Map */}
        <div
          className={`lg:w-[55%] xl:w-[50%] relative bg-gradient-to-br from-gray-50 to-blue-50/30 border-r border-gray-100 p-4 lg:p-6 flex items-center justify-center ${
            mobileView === "list" ? "hidden lg:flex" : "flex"
          }`}
        >
          {/* SVG Map */}
          <svg
            viewBox="0 0 600 600"
            className="w-full max-w-lg"
            role="img"
            aria-label="Carte interactive des régions de France"
          >
            {regionsGeo.map((region) => {
              const isSelected = selectedRegion === region.id;
              const isHovered = hoveredRegion === region.id;
              const count = citiesPerRegion[region.id] || 0;

              let fill = "#E0E7FF"; // default light
              if (isSelected) fill = "#1E40AF";
              else if (isHovered) fill = "#3B82F6";
              else if (selectedRegion && !isSelected) fill = "#E8ECF4";

              return (
                <g key={region.id}>
                  <path
                    d={region.path}
                    fill={fill}
                    stroke="#ffffff"
                    strokeWidth="2.5"
                    className="cursor-pointer transition-all duration-200"
                    onMouseEnter={() => setHoveredRegion(region.id)}
                    onMouseLeave={() => setHoveredRegion(null)}
                    onClick={() => handleRegionClick(region.id)}
                    role="button"
                    aria-label={`${region.name} - ${count} villes`}
                  />
                  {/* City count badge on region */}
                  {count > 0 && (
                    <g
                      className="pointer-events-none"
                      opacity={isSelected || isHovered ? 1 : 0.7}
                    >
                      <circle
                        cx={region.cx}
                        cy={region.cy}
                        r="14"
                        fill={isSelected || isHovered ? "#ffffff" : "#1E40AF"}
                        opacity={0.9}
                      />
                      <text
                        x={region.cx}
                        y={region.cy + 1}
                        textAnchor="middle"
                        dominantBaseline="central"
                        className="text-[11px] font-bold"
                        fill={isSelected || isHovered ? "#1E40AF" : "#ffffff"}
                      >
                        {count}
                      </text>
                    </g>
                  )}
                </g>
              );
            })}
          </svg>

          {/* Hover tooltip */}
          {hoveredData && !selectedRegion && (
            <div className="absolute top-4 left-4 bg-white rounded-xl shadow-lg border border-gray-100 px-4 py-3 pointer-events-none">
              <p className="font-bold text-dark text-sm">{hoveredData.name}</p>
              <p className="text-xs text-gray-400">
                {citiesPerRegion[hoveredData.id] || 0} villes disponibles
              </p>
            </div>
          )}

          {/* Legend */}
          <div className="absolute bottom-4 left-4 text-xs text-gray-400">
            Cliquez sur une région pour filtrer
          </div>
        </div>

        {/* RIGHT - Results list */}
        <div
          className={`lg:w-[45%] xl:w-[50%] flex flex-col ${
            mobileView === "map" ? "hidden lg:flex" : "flex"
          }`}
        >
          {/* Region header when selected */}
          {selectedData && (
            <div className="px-4 py-3 bg-primary/5 border-b border-primary/10 flex items-center gap-2">
              <button
                onClick={clearFilter}
                className="text-xs text-primary hover:underline"
              >
                Toutes les régions
              </button>
              <ChevronRight className="w-3 h-3 text-gray-300" />
              <span className="text-sm font-semibold text-dark">
                {selectedRegion}
              </span>
            </div>
          )}

          {/* Scrollable city list */}
          <div
            className="flex-1 overflow-y-auto divide-y divide-gray-50"
            style={{ maxHeight: selectedData ? 500 : 530 }}
          >
            {filteredCities.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-center px-4">
                <MapPin className="w-10 h-10 text-gray-200 mb-3" />
                <p className="text-gray-400 text-sm">Aucune ville trouvée</p>
                <button
                  onClick={clearFilter}
                  className="mt-2 text-primary text-sm hover:underline"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            ) : (
              filteredCities.map((city) => {
                const hospitalCount = getHospitalCount(city.slug);
                return (
                  <Link
                    key={city.slug}
                    href={`/taxi-conventionne-${city.slug}`}
                    className="group flex items-center gap-4 px-4 py-3.5 hover:bg-blue-50/50 transition-colors"
                  >
                    {/* Icon */}
                    <div className="w-10 h-10 bg-primary/8 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary/12 transition-colors">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2">
                        <h3 className="font-semibold text-dark text-sm group-hover:text-primary transition-colors truncate">
                          {city.name}
                        </h3>
                        <span className="text-xs text-gray-300 font-mono shrink-0">
                          {city.postalCode}
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 mt-0.5">
                        {city.department} ({city.departmentCode})
                      </p>
                    </div>

                    {/* Hospital badge */}
                    {hospitalCount > 0 && (
                      <div className="flex items-center gap-1 text-xs text-gray-400 bg-gray-50 px-2.5 py-1.5 rounded-lg shrink-0">
                        <Building2 className="w-3.5 h-3.5" />
                        {hospitalCount}
                      </div>
                    )}

                    {/* Arrow */}
                    <ChevronRight className="w-4 h-4 text-gray-200 group-hover:text-primary shrink-0 transition-colors" />
                  </Link>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
