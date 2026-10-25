import { MapPin, Phone, Mail, Clock, ExternalLink, Navigation, Compass, ShieldCheck, Instagram } from "lucide-react";
import { Language, VERIFIED_BUSINESS_DATA, OwnerEditableConfig, UI_STRINGS } from "../data/restaurantData";

interface ContactSectionProps {
  lang: Language;
  ownerConfig: OwnerEditableConfig;
}

export default function ContactSection({
  lang,
  ownerConfig,
}: ContactSectionProps) {
  const t = UI_STRINGS[lang];

  return (
    <section id="contacte" className="py-24 bg-white border-t border-[#231610]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0e6d9] text-[#7a482b] text-xs font-semibold uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-[#b8542b]" />
            <span>{lang === "ca" ? "Punt de Trobada a Manresa" : "Punto de Encuentro en Manresa"}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-cafe font-bold text-[#1f140e] tracking-tight">
            {t.contactHeading}
          </h2>
          <p className="text-base sm:text-lg text-[#5c4a3e] max-w-xl mx-auto text-balance">
            {t.contactSub}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Coordinates */}
          <div className="lg:col-span-5 space-y-4">
            {/* Address Card */}
            <div className="p-6 rounded-3xl bg-[#faf7f2] border border-[#231610]/10 space-y-3 shadow-xs">
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
                  <span className="text-xs text-[#6c594d] block mt-0.5">
                    {VERIFIED_BUSINESS_DATA.district} • {VERIFIED_BUSINESS_DATA.comarca}
                  </span>
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
                  <span>{t.openInGoogleMaps}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Phone Card (Tap-to-call) */}
            <div className="p-6 rounded-3xl bg-[#faf7f2] border border-[#231610]/10 space-y-2 shadow-xs">
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
                    className="text-2xl font-serif-cafe font-bold text-[#1f140e] hover:text-[#b8542b] transition-colors block"
                  >
                    {VERIFIED_BUSINESS_DATA.phone}
                  </a>
                </div>
              </div>
              <p className="text-xs text-[#7d6b5e] pl-13">
                {lang === "ca"
                  ? "Feu clic des del mòbil per trucar directament."
                  : "Haga clic desde el móvil para llamar directamente."}
              </p>
            </div>

            {/* Email Card */}
            <div className="p-6 rounded-3xl bg-[#faf7f2] border border-[#231610]/10 space-y-2 shadow-xs">
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

            {/* Instagram Social Card */}
            <div className="p-6 rounded-3xl bg-[#faf7f2] border border-[#231610]/10 space-y-2 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#fd1d1d] to-[#833ab4] text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#7a482b] block">
                    {t.instagramLabel}
                  </span>
                  <a
                    href={VERIFIED_BUSINESS_DATA.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-[#1f140e] hover:text-[#b8542b] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{VERIFIED_BUSINESS_DATA.instagramHandle}</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#b8542b]" />
                  </a>
                </div>
              </div>
              <p className="text-xs text-[#7d6b5e] pl-13">
                {lang === "ca"
                  ? "Segueix-nos per veure les fotos del dia a dia, tapes i arrossos."
                  : "Síguenos para ver las fotos del día a día, tapas y arroces."}
              </p>
            </div>
          </div>

          {/* Right Column: Real Embedded Interactive Map & Access */}
          <div className="lg:col-span-7 bg-[#faf7f2] rounded-3xl border border-[#231610]/10 p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#231610]/10 gap-2">
              <div>
                <span className="font-serif-cafe text-xl font-bold text-[#1f140e] block">
                  Carrer Muralla del Carme, 11
                </span>
                <span className="text-xs text-[#6c594d]">
                  08241 Manresa • Coordenades oficials
                </span>
              </div>
              <a
                href={VERIFIED_BUSINESS_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-[#b8542b] text-xs font-bold border border-[#231610]/10 hover:bg-[#f0e6d9] transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>{t.openInGoogleMaps}</span>
              </a>
            </div>

            {/* Embedded Google Maps Frame */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#e8dfd3] border border-[#231610]/10 shadow-inner">
              <iframe
                title="Mapa de La Montserratina a Manresa"
                src={VERIFIED_BUSINESS_DATA.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Direct Google Maps Business Location Button */}
            <div>
              <a
                href={VERIFIED_BUSINESS_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#b8542b] hover:bg-[#933e1c] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95 group"
              >
                <MapPin className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                <span>
                  {lang === "ca"
                    ? "Obrir Ubicació del Negoci a Google Maps (La Montserratina)"
                    : "Abrir Ubicación del Negocio en Google Maps (La Montserratina)"}
                </span>
                <ExternalLink className="w-4 h-4 text-white/80" />
              </a>
            </div>

            {/* Manresa Landmarks Context */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#5c4a3e]">
              <div className="p-4 rounded-xl bg-white border border-[#231610]/10 space-y-1">
                <span className="font-bold text-[#1f140e] block">
                  {lang === "ca" ? "Punt neuràlgic de Manresa:" : "Punto neurálgico de Manresa:"}
                </span>
                <p>
                  {lang === "ca"
                    ? "Situat a pocs passos del Passeig de Pere III, la Plaça de Sant Domènec i el Barri Antic."
                    : "Situado a pocos pasos del Passeig de Pere III, la Plaça de Sant Domènec y el Barri Antic."}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#231610]/10 space-y-1">
                <span className="font-bold text-[#1f140e] block">
                  {lang === "ca" ? "Accessibilitat & Transport:" : "Accesibilidad & Transporte:"}
                </span>
                <p>
                  {lang === "ca"
                    ? "Carrer peatonal i tranquil amb aparcaments subterranis propers (Plaça de la Reforma / Passeig)."
                    : "Calle peatonal y tranquila con aparcamientos subterráneos cercanos (Plaça de la Reforma / Passeig)."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
