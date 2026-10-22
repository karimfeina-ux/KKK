import { MapPin, Phone, Mail, Clock, ExternalLink, Navigation, ShieldCheck } from "lucide-react";
import { Language, VERIFIED_BUSINESS_DATA, OwnerEditableConfig, UI_STRINGS } from "../data/restaurantData";

interface ContactSectionProps {
  lang: Language;
  ownerConfig: OwnerEditableConfig;
}

export default function ContactSection({ lang, ownerConfig }: ContactSectionProps) {
  const t = UI_STRINGS[lang];

  return (
    <section id="contacte" className="py-24 bg-white border-t border-[#231610]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-widest text-[#b8542b] block">
            {lang === "ca" ? "Com Arribar-hi & Contacte" : "Cómo Llegar & Contacto"}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif-cafe font-bold text-[#1f140e] tracking-tight">
            {t.contactHeading}
          </h2>
          <p className="text-base sm:text-lg text-[#5c4a3e] max-w-xl mx-auto text-balance">
            {t.contactSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Verified Coordinates Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Address Card */}
            <div className="p-6 rounded-2xl bg-[#faf7f2] border border-[#231610]/10 space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f0e6d9] text-[#b8542b] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#7a482b] block">
                    {t.addressLabel}
                  </span>
                  <p className="text-base font-semibold text-[#1f140e] leading-snug">
                    {VERIFIED_BUSINESS_DATA.address}
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={VERIFIED_BUSINESS_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#b8542b] hover:text-[#933e1c] hover:underline transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>{t.openInMaps}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Phone Card (Tap-to-call) */}
            <div className="p-6 rounded-2xl bg-[#faf7f2] border border-[#231610]/10 space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#b8542b] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#7a482b] block">
                    {t.phoneLabel}
                  </span>
                  <a
                    href={`tel:${VERIFIED_BUSINESS_DATA.phoneClean}`}
                    className="text-xl sm:text-2xl font-serif-cafe font-bold text-[#1f140e] hover:text-[#b8542b] transition-colors block"
                  >
                    {VERIFIED_BUSINESS_DATA.phone}
                  </a>
                </div>
              </div>
              <p className="text-xs text-[#7d6b5e] pl-13">
                {t.phoneHelp}
              </p>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-[#faf7f2] border border-[#231610]/10 space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#f0e6d9] text-[#b8542b] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#7a482b] block">
                    {t.emailLabel}
                  </span>
                  <a
                    href={`mailto:${VERIFIED_BUSINESS_DATA.email}`}
                    className="text-base font-semibold text-[#1f140e] hover:text-[#b8542b] transition-colors break-all"
                  >
                    {VERIFIED_BUSINESS_DATA.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Schedule & Attention Card */}
            <div className="p-6 rounded-2xl bg-[#f4eee5] border border-[#231610]/10 space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white text-[#4c583f] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#4c583f] block">
                    {t.hoursHeading}
                  </span>
                  <p className="text-xs sm:text-sm text-[#463529] mt-0.5">
                    {ownerConfig.hasCustomHours
                      ? ownerConfig.openingHoursNotes[lang]
                      : ownerConfig.openingHoursNotes[lang]}
                  </p>
                </div>
              </div>
              <p className="text-xs text-[#7d6b5e] pl-13 pt-1">
                {t.hoursCallNote}
              </p>
            </div>
          </div>

          {/* Right Column: Interactive Map & Street Context */}
          <div className="lg:col-span-7 bg-[#faf7f2] rounded-2xl border border-[#231610]/10 p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex items-center justify-between pb-4 border-b border-[#231610]/10">
              <div>
                <span className="font-serif-cafe text-xl font-bold text-[#1f140e] block">
                  {lang === "ca" ? "Muralla del Carme, Manresa" : "Muralla del Carme, Manresa"}
                </span>
                <span className="text-xs text-[#6c594d]">
                  08241 Manresa (Bages, Barcelona)
                </span>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#f0e6d9] text-[#7a482b] text-xs font-semibold">
                {lang === "ca" ? "Zona Cèntrica" : "Zona Centro"}
              </span>
            </div>

            {/* Map Canvas / Visualizer with Real Google Maps Anchor */}
            <div className="relative rounded-xl overflow-hidden aspect-[16/10] bg-[#e8dfd3] border border-[#231610]/10 flex flex-col items-center justify-center text-center p-6 shadow-inner">
              <div className="w-12 h-12 rounded-full bg-[#b8542b] text-white flex items-center justify-center shadow-lg mb-3 animate-bounce">
                <MapPin className="w-6 h-6" />
              </div>
              <p className="font-serif-cafe text-2xl font-bold text-[#1f140e] mb-1">
                {VERIFIED_BUSINESS_DATA.name}
              </p>
              <p className="text-xs text-[#5c4a3e] max-w-sm mb-4">
                Carrer Muralla del Carme, 11, 08241 Manresa
              </p>
              <a
                href={VERIFIED_BUSINESS_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#231610] hover:bg-[#b8542b] text-white text-xs font-semibold shadow-md transition-colors"
              >
                <span>{t.openInMaps}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Neighborhood & Access Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#5c4a3e]">
              <div className="p-3.5 rounded-lg bg-white border border-[#231610]/10">
                <span className="font-bold text-[#1f140e] block mb-1">
                  {lang === "ca" ? "A peu pel centre:" : "A pie por el centro:"}
                </span>
                <p>
                  {lang === "ca"
                    ? "Accessible còmodament des del Passeig de Pere III i la zona comercial de Manresa."
                    : "Accesible cómodamente desde el Passeig de Pere III y la zona comercial de Manresa."}
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-white border border-[#231610]/10">
                <span className="font-bold text-[#1f140e] block mb-1">
                  {lang === "ca" ? "Aparcament i transport:" : "Aparcamiento y transporte:"}
                </span>
                <p>
                  {lang === "ca"
                    ? "Aparcaments públics propers a la zona centre i connexió amb línies d'autobús urbà."
                    : "Aparcamientos públicos cercanos a la zona centro y conexión con líneas de autobús urbano."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
