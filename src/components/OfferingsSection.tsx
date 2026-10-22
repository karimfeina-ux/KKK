import { useState } from "react";
import { Phone, Check, Sparkles, AlertCircle, Utensils, PlusCircle } from "lucide-react";
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
  onOpenOwnerPanel: () => void;
}

export default function OfferingsSection({
  lang,
  ownerConfig,
  onOpenOwnerPanel,
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
          <span className="text-xs font-semibold uppercase tracking-widest text-[#b8542b] block">
            {lang === "ca" ? "Proposta Culinària" : "Propuesta Culinaria"}
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif-cafe font-bold text-[#1f140e] tracking-tight">
            {t.offeringsHeading}
          </h2>
          <p className="text-base sm:text-lg text-[#5c4a3e] max-w-xl mx-auto text-balance">
            {t.offeringsSubtitle}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          {CONFIRMED_OFFERING_CATEGORIES.map((cat) => {
            const isActive = cat.id === activeCategoryId;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-[#b8542b] text-white shadow-md scale-102"
                    : "bg-white text-[#5c4a3e] hover:text-[#231610] hover:bg-[#f0e6d9] border border-[#231610]/10"
                }`}
              >
                {cat.name[lang]}
              </button>
            );
          })}
        </div>

        {/* Active Category Presentation Card */}
        <div className="bg-white rounded-2xl shadow-xl border border-[#231610]/10 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Category Photo */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
              <img
                src={activeCategory.image}
                alt={activeCategory.imageAlt[lang]}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:hidden" />
              <div className="absolute bottom-4 left-4 right-4 text-white lg:hidden">
                <span className="text-xs uppercase tracking-wider text-[#df7b53] font-bold">
                  Montserratina
                </span>
                <p className="font-serif-cafe text-2xl font-bold">
                  {activeCategory.name[lang]}
                </p>
              </div>
            </div>

            {/* Category Details & Highlights */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="hidden lg:flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-full bg-[#f4eee5] text-[#b8542b] text-xs font-semibold uppercase tracking-wider">
                    {lang === "ca" ? "Categoria Confirmada" : "Categoría Confirmada"}
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
                    {lang === "ca" ? "Allò que trobareu:" : "Lo que encontrará:"}
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

                {/* Custom owner verified items if any */}
                {customItemsForActiveCategory.length > 0 && (
                  <div className="mt-6 pt-6 border-t border-[#231610]/10 space-y-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#b8542b] block">
                      {lang === "ca" ? "Plats i opcions confirmades:" : "Platos y opciones confirmadas:"}
                    </span>
                    <div className="space-y-2">
                      {customItemsForActiveCategory.map((item) => (
                        <div
                          key={item.id}
                          className="p-3 rounded-lg bg-[#faf7f2] border border-[#231610]/10 flex items-center justify-between"
                        >
                          <div>
                            <span className="font-medium text-sm text-[#1f140e] block">
                              {item.name[lang]}
                            </span>
                            {item.description && (
                              <span className="text-xs text-[#6c594d]">
                                {item.description[lang]}
                              </span>
                            )}
                          </div>
                          {item.price && (
                            <span className="font-serif-cafe text-base font-bold text-[#b8542b] ml-4">
                              {item.price}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Inquiry & Verification Notice */}
              <div className="pt-6 border-t border-[#231610]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-[#7d6b5e] flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-[#b8542b] shrink-0" />
                  <span>
                    {lang === "ca"
                      ? "Consulteu al taulell les racions i suggeriments del dia."
                      : "Consulte en la barra las raciones y sugerencias del día."}
                  </span>
                </div>

                <a
                  href={`tel:${VERIFIED_BUSINESS_DATA.phoneClean}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#231610] hover:bg-[#b8542b] text-white text-xs font-semibold transition-colors shrink-0"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{lang === "ca" ? "Consultar o encarregar" : "Consultar o encargar"}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Fact Checking & Owner Guidance Note */}
        <div className="mt-10 p-5 rounded-xl bg-[#f4eee5] border border-[#231610]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-white text-[#b8542b] flex items-center justify-center shrink-0 shadow-xs">
              <Utensils className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-[#1f140e] block">
                {lang === "ca" ? "Compromís de veracitat" : "Compromiso de veracidad"}
              </span>
              <p className="text-[#6c594d] mt-0.5">
                {t.offeringsVerifiedNote}
              </p>
            </div>
          </div>

          <button
            onClick={onOpenOwnerPanel}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-[#faf7f2] text-[#463529] border border-[#231610]/15 font-medium transition-colors shrink-0"
          >
            <PlusCircle className="w-3.5 h-3.5 text-[#b8542b]" />
            <span>{t.ownerAdminBtn}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
