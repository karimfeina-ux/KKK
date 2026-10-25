import { Phone, MapPin, ArrowRight, Clock, Sparkles, UtensilsCrossed, Coffee, Star, Instagram, Building2 } from "lucide-react";
import { Language, VERIFIED_BUSINESS_DATA, UI_STRINGS, REAL_BUSINESS_PHOTOS } from "../data/restaurantData";

interface HeroSectionProps {
  lang: Language;
}

export default function HeroSection({ lang }: HeroSectionProps) {
  const t = UI_STRINGS[lang];

  // Calculate live opening status based on Spain local time
  const now = new Date();
  const currentDay = now.getDay(); // 0 is Sunday, 1 is Monday...
  const currentHour = now.getHours();
  const isSunday = currentDay === 0;
  
  // Real hours: Mon-Thu 7-23, Fri 7-23, Sat 8-01, Sun closed
  const isOpenNow = !isSunday && (
    currentDay === 6 ? (currentHour >= 8 || currentHour < 1) : (currentHour >= 7 && currentHour < 23)
  );

  return (
    <section id="inici" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-warm-pattern">
      {/* Background warm lighting halos */}
      <div className="absolute top-10 right-0 w-[550px] h-[550px] bg-[#df7b53]/18 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#4c583f]/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Real-time Status & Location Pill */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f0e6d9] border border-[#231610]/10 text-xs font-semibold text-[#6c4832] shadow-xs">
                <MapPin className="w-3.5 h-3.5 text-[#b8542b]" />
                <span>{t.heroBadge}</span>
              </div>

              {/* Live Hours Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#231610]/10 text-xs font-medium text-[#463529] shadow-xs">
                <span className={`w-2 h-2 rounded-full ${isOpenNow ? "bg-emerald-500 animate-pulse" : "bg-amber-600"}`} />
                <span className="font-semibold">{isOpenNow ? t.heroOpenNow : t.heroClosedNow}</span>
                <span className="text-stone-400">•</span>
                <span className="text-[11px] text-stone-600">
                  {currentDay === 0
                    ? lang === "ca" ? "Descans diumenge" : "Descanso domingo"
                    : currentDay === 6 ? "08:00 – 01:00 h" : "07:00 – 23:00 h"}
                </span>
              </div>

              {/* Google Reviews rating badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#231610]/10 text-xs font-medium text-[#463529] shadow-xs">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="font-bold text-[#1f140e]">{VERIFIED_BUSINESS_DATA.rating}</span>
                <span className="text-[11px] text-[#6c594d]">
                  ({VERIFIED_BUSINESS_DATA.reviewCount} Google)
                </span>
              </div>
            </div>

            {/* Main Brand Title */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#b8542b] block mb-1">
                {VERIFIED_BUSINESS_DATA.brandSubtitle[lang]}
              </span>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif-cafe font-bold text-[#1f140e] leading-[1.04] tracking-tight">
                {t.heroTitle}
              </h1>
            </div>

            {/* Subtitle / Historic Identity */}
            <p className="text-base sm:text-lg md:text-xl text-[#5c4a3e] font-normal leading-relaxed max-w-xl text-balance">
              {t.heroSubtitle}
            </p>

            {/* Verified culinary highlights */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#231610]/10 text-xs font-medium text-[#463529] shadow-xs">
                <Coffee className="w-3.5 h-3.5 text-[#b8542b]" />
                {lang === "ca" ? "Esmorzars de forquilla des de les 7:00 h" : "Desayunos de tenedor desde las 7:00 h"}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#231610]/10 text-xs font-medium text-[#463529] shadow-xs">
                <UtensilsCrossed className="w-3.5 h-3.5 text-[#b8542b]" />
                {lang === "ca" ? "Arrossos mariners, Menú & Tapes" : "Arroces marineros, Menú & Tapas"}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <a
                href={`tel:${VERIFIED_BUSINESS_DATA.phoneClean}`}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#b8542b] hover:bg-[#933e1c] text-white text-sm font-semibold shadow-md transition-all hover:shadow-lg active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>{t.heroActionCall}</span>
              </a>

              <a
                href="#oferta"
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full bg-white hover:bg-[#f4eee5] border border-[#231610]/15 text-[#231610] text-sm font-medium transition-all shadow-xs"
              >
                <span>{t.viewMenuAction}</span>
                <ArrowRight className="w-4 h-4 text-[#b8542b]" />
              </a>

              <a
                href={VERIFIED_BUSINESS_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-full bg-[#f0e6d9] hover:bg-[#e4d5c3] text-[#463529] text-sm font-semibold transition-all border border-[#231610]/10 shadow-2xs"
                title={VERIFIED_BUSINESS_DATA.instagramHandle}
              >
                <Instagram className="w-4 h-4 text-[#b8542b]" />
                <span>Instagram</span>
              </a>
            </div>

            {/* Verified Footnote */}
            <div className="pt-2 text-xs text-[#7d6b5e] flex flex-wrap items-center gap-3">
              <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                {lang === "ca" ? "Negoci real contrastat a Manresa" : "Negocio real contrastado en Manresa"}
              </span>
              <span>•</span>
              <span>Carrer Muralla del Carme, 11</span>
              <span>•</span>
              <a
                href={VERIFIED_BUSINESS_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-[#b8542b] font-medium"
              >
                {VERIFIED_BUSINESS_DATA.instagramHandle}
              </a>
            </div>
          </div>

          {/* Right Imagery Composition — Genuine Outside Local Shop View */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Visual: Real Business Local Shop Picture from Outside */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] group bg-stone-900">
                <img
                  src={REAL_BUSINESS_PHOTOS.facadeGlassWindow}
                  alt={
                    lang === "ca"
                      ? "Façana exterior i aparador de La Montserratina al Carrer Muralla del Carme, 11, Manresa"
                      : "Fachada exterior y cristalera de La Montserratina en Carrer Muralla del Carme, 11, Manresa"
                  }
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
                
                {/* Street & Place Badge */}
                <div className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium flex items-center gap-1.5 shadow-sm">
                  <Building2 className="w-3.5 h-3.5 text-[#df7b53]" />
                  <span>
                    {lang === "ca" ? "Façana Exterior • Muralla del Carme, 11" : "Fachada Exterior • Muralla del Carme, 11"}
                  </span>
                </div>

                {/* Verified Business Seal Pill */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>{lang === "ca" ? "Local Autèntic" : "Local Auténtico"}</span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#df7b53] block">
                    {lang === "ca" ? "Aparador & Entrada al Negoci" : "Cristalera & Entrada al Local"}
                  </span>
                  <p className="font-serif-cafe text-2xl font-bold tracking-tight">
                    {VERIFIED_BUSINESS_DATA.name}
                  </p>
                  <p className="text-xs text-white/85 mt-0.5">
                    {lang === "ca" ? "Carrer Muralla del Carme, 11 • 08241 Manresa" : "Carrer Muralla del Carme, 11 • 08241 Manresa"}
                  </p>
                </div>
              </div>

              {/* Floating Accent 1: Verified Google Reviews & Location badge (Clean info, no repeated dish photo) */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 z-20 bg-white p-3.5 rounded-2xl shadow-xl border border-[#231610]/10 max-w-xs animate-in slide-in-from-bottom-2 duration-500">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#faf7f2] border border-[#231610]/10 flex items-center justify-center shrink-0 shadow-2xs">
                    <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-[#1f140e]">
                        {VERIFIED_BUSINESS_DATA.rating} / 5.0
                      </span>
                      <span className="text-[10px] text-[#7d6b5e]">
                        ({VERIFIED_BUSINESS_DATA.reviewCount} ressenyes)
                      </span>
                    </div>
                    <span className="text-[11px] text-[#6c594d] block font-medium">
                      {lang === "ca" ? "Muralla del Carme, 11 • Manresa" : "Muralla del Carme, 11 • Manresa"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Accent 2: Official Instagram Verified Handle (Clean badge, no repeated photo) */}
              <a
                href={VERIFIED_BUSINESS_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:block absolute -top-4 -right-4 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl shadow-lg border border-[#231610]/10 text-left hover:scale-102 transition-transform cursor-pointer"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#fd5949] to-[#d6249f] text-white flex items-center justify-center shrink-0 shadow-2xs">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#1f140e] block font-mono">
                      @lamontserratinamanresa
                    </span>
                    <span className="text-[10px] text-emerald-700 font-semibold flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5 text-[#df7b53]" />
                      {lang === "ca" ? "Instagram Oficial" : "Instagram Oficial"}
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
