import { MapPin, Shield, Sun, Coffee, Utensils, Heart, CheckCircle2, Sparkles } from "lucide-react";
import { Language, VERIFIED_BUSINESS_DATA, UI_STRINGS, REAL_BUSINESS_PHOTOS } from "../data/restaurantData";

interface AboutSectionProps {
  lang: Language;
}

export default function AboutSection({ lang }: AboutSectionProps) {
  const t = UI_STRINGS[lang];

  return (
    <section id="historia" className="py-24 bg-white border-t border-b border-[#231610]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Space & Stone Heritage Imagery — 100% Unique to this Section */}
          <div className="lg:col-span-5 relative space-y-4">
            {/* Primary Visual: Historic Stone Wall Dining Room */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3] group bg-[#231610]">
              <img
                src={REAL_BUSINESS_PHOTOS.diningRoomStone}
                alt={
                  lang === "ca"
                    ? "Menjador de La Montserratina amb paret de pedra original de la Muralla medieval de Manresa"
                    : "Comedor de La Montserratina con pared de piedra original de la Muralla medieval de Manresa"
                }
                className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-[#df7b53]" />
                <span>{lang === "ca" ? "Parets de Pedra Originals" : "Paredes de Piedra Originales"}</span>
              </div>

              <div className="absolute bottom-3.5 left-4 right-4 text-white">
                <span className="text-[10px] uppercase tracking-wider text-[#df7b53] font-mono block">
                  {lang === "ca" ? "Patrimoni Històric de Manresa" : "Patrimonio Histórico de Manresa"}
                </span>
                <p className="font-serif-cafe text-lg font-bold">
                  {lang === "ca" ? "El Menjador de la Muralla" : "El Comedor de la Muralla"}
                </p>
              </div>
            </div>

            {/* Secondary Visual: Brand Seal Mural & Stone Arch */}
            <div className="p-4 rounded-2xl bg-[#faf7f2] border border-[#231610]/10 shadow-xs flex items-center gap-4">
              <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 border border-[#231610]/10 shadow-2xs group">
                <img
                  src={REAL_BUSINESS_PHOTOS.interiorArchLogo}
                  alt={
                    lang === "ca"
                      ? "Segell oficial i pas d'arc de pedra a La Montserratina"
                      : "Sello oficial y paso de arco de piedra en La Montserratina"
                  }
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div>
                <span className="text-xs font-bold text-[#b8542b] block flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-[#df7b53]" />
                  {lang === "ca" ? "Espai Gastronòmic & Arc de Pedra" : "Espacio Gastronómico & Arco de Piedra"}
                </span>
                <p className="text-xs text-[#5c4a3e] mt-0.5 leading-relaxed">
                  {lang === "ca"
                    ? "Ambient càlid que conserva els vestigis de pedra viva i el segell artesà del negoci."
                    : "Ambiente cálido que conserva los vestigios de piedra viva y el sello artesano del negocio."}
                </p>
              </div>
            </div>
          </div>

          {/* Narrative & History Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white border border-[#231610]/15 shadow-sm shrink-0">
                <img
                  src={VERIFIED_BUSINESS_DATA.logoSeal}
                  alt="Segell Oficial La Montserratina Espai Gastronòmic"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f0e6d9] text-[#7a482b] text-xs font-semibold">
                <MapPin className="w-3.5 h-3.5 text-[#b8542b]" />
                <span>{t.aboutHistoryTag}</span>
              </div>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif-cafe font-bold text-[#1f140e] tracking-tight leading-tight">
              {t.aboutHeading}
            </h2>

            <p className="text-lg font-medium text-[#844c2c] leading-relaxed">
              {t.aboutSub}
            </p>

            <div className="space-y-4 text-sm sm:text-base text-[#5c4a3e] leading-relaxed">
              <p>{VERIFIED_BUSINESS_DATA.heritageStory[lang]}</p>
            </div>

            {/* Verified Architectural & Service Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              {VERIFIED_BUSINESS_DATA.features.map((feat) => {
                const getIcon = () => {
                  switch (feat.icon) {
                    case "Shield":
                      return <Shield className="w-4 h-4 text-[#b8542b]" />;
                    case "Sun":
                      return <Sun className="w-4 h-4 text-[#b8542b]" />;
                    case "Utensils":
                      return <Utensils className="w-4 h-4 text-[#b8542b]" />;
                    case "Coffee":
                    default:
                      return <Coffee className="w-4 h-4 text-[#b8542b]" />;
                  }
                };

                return (
                  <div
                    key={feat.id}
                    className="p-4 rounded-2xl bg-[#faf7f2] border border-[#231610]/10 space-y-1.5"
                  >
                    <div className="w-8 h-8 rounded-full bg-white text-[#b8542b] flex items-center justify-center shadow-xs">
                      {getIcon()}
                    </div>
                    <h3 className="font-serif-cafe text-base font-bold text-[#1f140e]">
                      {feat.title[lang]}
                    </h3>
                    <p className="text-xs text-[#6c594d] leading-relaxed">
                      {feat.desc[lang]}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Official Heritage Citation */}
            <div className="p-4 rounded-xl bg-[#f4eee5] border border-[#231610]/10 flex items-start gap-3 text-xs text-[#6c594d]">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>
                {lang === "ca"
                  ? "Dades i referències històriques contrastades als registres de Manresa Turisme i l'Ajuntament de Manresa."
                  : "Datos y referencias históricas contrastadas en los registros de Manresa Turisme y el Ajuntament de Manresa."}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
