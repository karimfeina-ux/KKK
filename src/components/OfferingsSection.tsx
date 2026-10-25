import { useState } from "react";
import { Phone, Check, AlertCircle, Utensils, PlusCircle, Sparkles, Coffee, Flame } from "lucide-react";
import {
  Language,
  CONFIRMED_OFFERING_CATEGORIES,
  OwnerEditableConfig,
  VERIFIED_BUSINESS_DATA,
  UI_STRINGS,
} from "../data/restaurantData";

interface OfferingsSectionProps {
  lang: Language;
  ownerConfig: OwnerEditableConfig;
}

export default function OfferingsSection({
  lang,
  ownerConfig,
}: OfferingsSectionProps) {
  const [activeCategoryId, setActiveCategoryId] = useState<string>("esmorzars");
  const t = UI_STRINGS[lang];

  const activeCategory =
    CONFIRMED_OFFERING_CATEGORIES.find((c) => c.id === activeCategoryId) ||
    CONFIRMED_OFFERING_CATEGORIES[0];

  const customItemsForActiveCategory = ownerConfig.customMenuItems.filter(
    (item) => item.categoryId === activeCategoryId
  );

  return (
    <section id="oferta" className="py-24 bg-[#faf7f2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f0e6d9] text-[#7a482b] text-xs font-semibold uppercase tracking-wider">
            <Utensils className="w-3.5 h-3.5 text-[#b8542b]" />
            <span>{lang === "ca" ? "Cuina Mediterrània & Bar de Barri" : "Cocina Mediterránea & Bar de Barrio"}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif-cafe font-bold text-[#1f140e] tracking-tight">
            {t.offeringsHeading}
          </h2>
          <p className="text-base sm:text-lg text-[#5c4a3e] max-w-xl mx-auto text-balance">
            {t.offeringsSub}
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {CONFIRMED_OFFERING_CATEGORIES.map((cat) => {
            const isActive = cat.id === activeCategoryId;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                  isActive
                    ? "bg-[#b8542b] text-white shadow-md scale-102"
                    : "bg-white text-[#5c4a3e] hover:text-[#231610] hover:bg-[#f0e6d9] border border-[#231610]/10"
                }`}
              >
                <span>{cat.name[lang]}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full ${
                    isActive ? "bg-white/20 text-white" : "bg-[#f4eee5] text-[#7a482b]"
                  }`}
                >
                  {cat.badge[lang]}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Category Presentation Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-[#231610]/10 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Category Photo with Subtle Vignette & Verified Source Badge */}
            <div className="lg:col-span-5 relative min-h-[340px] lg:min-h-full group bg-stone-900">
              <img
                src={activeCategory.image}
                alt={activeCategory.imageAlt[lang]}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent pointer-events-none" />
              
              {/* Photo Source Badge */}
              <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/65 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3 h-3 text-[#df7b53]" />
                <span>
                  {activeCategory.id === "esmorzars"
                    ? lang === "ca"
                      ? "Foto a Google Maps • Cafè & Terrassa Muralla"
                      : "Foto en Google Maps • Café & Terraza Muralla"
                    : activeCategory.id === "menu-migdia"
                    ? lang === "ca"
                      ? "Foto Real • Arròs negre mariner casolà"
                      : "Foto Real • Arroz negro marinero casero"
                    : activeCategory.id === "tapes-racions"
                    ? lang === "ca"
                      ? "Foto Real • Calamars, croquetes & braves"
                      : "Foto Real • Calamares, croquetas & bravas"
                    : activeCategory.id === "brasa-mercat"
                    ? lang === "ca"
                      ? "Foto Real • Graellada amb verdures"
                      : "Foto Real • Parrillada con verduras"
                    : lang === "ca"
                    ? "Foto Real • Prestatgeria del Celler"
                    : "Foto Real • Estantería de la Bodega"}
                </span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] uppercase tracking-wider text-[#df7b53] font-bold block">
                  {activeCategory.badge[lang]}
                </span>
                <p className="font-serif-cafe text-xl sm:text-2xl font-bold">
                  {activeCategory.name[lang]}
                </p>
                <p className="text-xs text-white/80 mt-0.5 line-clamp-1">
                  {activeCategory.imageAlt[lang]}
                </p>
              </div>
            </div>

            {/* Category Details & Highlights */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="hidden lg:flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#f4eee5] text-[#b8542b] text-xs font-semibold uppercase tracking-wider">
                    {activeCategory.badge[lang]}
                  </span>
                  <span className="text-xs text-[#7d6b5e] font-medium">
                    Muralla del Carme, 11 • Manresa
                  </span>
                </div>

                <h3 className="text-2xl sm:text-4xl font-serif-cafe font-bold text-[#1f140e]">
                  {activeCategory.name[lang]}
                </h3>

                <p className="text-sm sm:text-base text-[#5c4a3e] leading-relaxed">
                  {activeCategory.summary[lang]}
                </p>

                {/* Confirmed Characteristics */}
                <div className="pt-2 space-y-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#7a482b] block">
                    {lang === "ca" ? "Especialitats i Trets Destacats:" : "Especialidades y Rasgos Destacados:"}
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeCategory.highlights[lang].map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#463529]">
                        <div className="w-4 h-4 rounded-full bg-[#4c583f]/15 text-[#4c583f] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </div>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Popular sample dishes */}
                <div className="pt-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#6c594d] block mb-2">
                    {lang === "ca" ? "Propostes habituals de la casa:" : "Propuestas habituales de la casa:"}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeCategory.popularDishes.map((dish, dIdx) => (
                      <span
                        key={dIdx}
                        className="px-3 py-1 rounded-lg bg-[#faf7f2] border border-[#231610]/10 text-xs text-[#231610] font-medium"
                      >
                        {dish[lang]}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Custom items added by owner if any */}
                {customItemsForActiveCategory.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-[#231610]/10 space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#b8542b] block">
                      {lang === "ca" ? "Plats confirmats afegits pel propietari:" : "Platos confirmados añadidos por el propietario:"}
                    </span>
                    <div className="space-y-2">
                      {customItemsForActiveCategory.map((item) => (
                        <div
                          key={item.id}
                          className="p-3.5 rounded-xl bg-[#faf7f2] border border-[#231610]/10 flex items-center justify-between shadow-xs"
                        >
                          <div>
                            <span className="font-semibold text-sm text-[#1f140e] block">
                              {item.name[lang]}
                            </span>
                            {item.description && (
                              <span className="text-xs text-[#6c594d]">
                                {item.description[lang]}
                              </span>
                            )}
                          </div>
                          {item.price && (
                            <span className="font-serif-cafe text-base font-bold text-[#b8542b] ml-4 shrink-0">
                              {item.price}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Inquiry & Action Button */}
              <div className="pt-6 border-t border-[#231610]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#7d6b5e] flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-[#b8542b] shrink-0" />
                  <span>
                    {lang === "ca"
                      ? "Disponibilitat diària segons mercat i temporada."
                      : "Disponibilidad diaria según mercado y temporada."}
                  </span>
                </div>

                <a
                  href={`tel:${VERIFIED_BUSINESS_DATA.phoneClean}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#231610] hover:bg-[#b8542b] text-white text-xs font-semibold transition-colors shrink-0 shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{lang === "ca" ? "Trucar per encarregar o taula" : "Llamar para encargar o mesa"}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Fact Checking & Owner Guidance Note */}
        <div className="mt-10 p-5 rounded-2xl bg-[#f4eee5] border border-[#231610]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-full bg-white text-[#b8542b] flex items-center justify-center shrink-0 shadow-xs">
              <Utensils className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-[#1f140e] block text-sm">
                {lang === "ca" ? "Carta del dia i suggeriments" : "Carta del día y sugerencias"}
              </span>
              <p className="text-[#6c594d] mt-0.5 leading-relaxed">
                {t.offeringsNotice}
              </p>
            </div>
          </div>

          <a
            href={`tel:${VERIFIED_BUSINESS_DATA.phoneClean}`}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#231610] hover:bg-[#b8542b] text-white text-xs font-semibold transition-colors shrink-0 shadow-xs"
          >
            <Phone className="w-3.5 h-3.5 text-[#df7b53]" />
            <span>{VERIFIED_BUSINESS_DATA.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
