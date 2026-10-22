import { Phone, MapPin, ArrowRight, Coffee, UtensilsCrossed } from "lucide-react";
import { Language, VERIFIED_BUSINESS_DATA, UI_STRINGS } from "../data/restaurantData";

interface HeroSectionProps {
  lang: Language;
}

export default function HeroSection({ lang }: HeroSectionProps) {
  const t = UI_STRINGS[lang];

  return (
    <section id="inici" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-warm-pattern">
      {/* Decorative warm aura */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#df7b53]/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-[#4c583f]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Location Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f0e6d9] border border-[#231610]/10 text-xs font-semibold text-[#6c4832] shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-[#b8542b]" />
              <span>{t.heroBadge}</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif-cafe font-bold text-[#1f140e] leading-[1.05] tracking-tight">
              {t.heroTitle}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-[#5c4a3e] font-normal leading-relaxed max-w-xl text-balance">
              {t.heroSubtitle}
            </p>

            {/* Quick Offering Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#231610]/10 text-xs font-medium text-[#463529]">
                <Coffee className="w-3.5 h-3.5 text-[#b8542b]" />
                {lang === "ca" ? "Cafè & Esmorzars" : "Café & Desayunos"}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#231610]/10 text-xs font-medium text-[#463529]">
                <UtensilsCrossed className="w-3.5 h-3.5 text-[#b8542b]" />
                {lang === "ca" ? "Tapes Tradicionals" : "Tapas Tradicionales"}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#231610]/10 text-xs font-medium text-[#463529]">
                {lang === "ca" ? "Menjar Informal" : "Comida Informal"}
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={`tel:${VERIFIED_BUSINESS_DATA.phoneClean}`}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#b8542b] hover:bg-[#933e1c] text-white text-sm font-semibold shadow-md transition-all hover:shadow-lg active:scale-95"
              >
                <Phone className="w-4 h-4" />
                <span>{t.heroActionCall}</span>
              </a>

              <a
                href="#contacte"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-[#f4eee5] border border-[#231610]/15 text-[#231610] text-sm font-medium transition-all"
              >
                <span>{t.heroActionMap}</span>
                <ArrowRight className="w-4 h-4 text-[#b8542b]" />
              </a>
            </div>

            {/* Verified address and phone footnote */}
            <div className="pt-2 text-xs text-[#7d6b5e] flex items-center gap-4">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                {lang === "ca" ? "Dades verificades" : "Datos verificados"}
              </span>
              <span>•</span>
              <span>{VERIFIED_BUSINESS_DATA.addressShort}</span>
            </div>
          </div>

          {/* Right Imagery Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image Card */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80"
                  alt={lang === "ca" ? "Cafeteria i taula acollidora a Montserratina" : "Cafetería y mesa acogedora en Montserratina"}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <p className="font-serif-cafe text-xl font-bold tracking-tight">
                    {VERIFIED_BUSINESS_DATA.name}
                  </p>
                  <p className="text-xs text-white/90">
                    Carrer Muralla del Carme, 11 • Manresa
                  </p>
                </div>
              </div>

              {/* Secondary Accent Floating Card */}
              <div className="hidden sm:block absolute -bottom-6 -left-8 z-20 bg-white p-3.5 rounded-xl shadow-xl border border-[#231610]/10 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=300&q=80"
                      alt="Cafè espresso"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#1f140e] block">
                      {lang === "ca" ? "El cafè de cada dia" : "El café de cada día"}
                    </span>
                    <span className="text-[11px] text-[#6c594d]">
                      {lang === "ca" ? "Per començar bé el matí" : "Para empezar bien la mañana"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
