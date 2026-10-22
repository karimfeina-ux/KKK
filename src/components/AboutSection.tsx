import { Heart, MapPin, Coffee, Users, ShieldCheck } from "lucide-react";
import { Language, VERIFIED_BUSINESS_DATA, UI_STRINGS } from "../data/restaurantData";

interface AboutSectionProps {
  lang: Language;
}

export default function AboutSection({ lang }: AboutSectionProps) {
  const t = UI_STRINGS[lang];

  return (
    <section id="quisom" className="py-20 bg-white border-t border-b border-[#231610]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Photo Gallery Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-xl overflow-hidden shadow-md aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
                  alt={lang === "ca" ? "Pa artesà i tradició d'esmorzars" : "Pan artesanal y tradición de desayunos"}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80"
                  alt={lang === "ca" ? "Cafè acabat d'elaborar" : "Café recién elaborado"}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="rounded-xl overflow-hidden shadow-md aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80"
                  alt={lang === "ca" ? "Tapes per compartir a Manresa" : "Tapas para compartir en Manresa"}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md aspect-square">
                <img
                  src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=600&q=80"
                  alt={lang === "ca" ? "Esmorzars de forquilla i cafè" : "Desayunos y café"}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Narrative & Values */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#b8542b]">
              <Heart className="w-3.5 h-3.5 fill-[#b8542b]" />
              <span>{lang === "ca" ? "Proximitat i Tradició" : "Cercanía y Tradición"}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif-cafe font-bold text-[#1f140e] tracking-tight leading-tight">
              {t.aboutHeading}
            </h2>

            <p className="text-lg font-medium text-[#7a482b] leading-relaxed">
              {t.aboutLead}
            </p>

            <div className="space-y-4 text-sm sm:text-base text-[#5c4a3e] leading-relaxed">
              <p>{t.aboutBody1}</p>
              <p>{t.aboutBody2}</p>
            </div>

            {/* Core Values Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[#faf7f2] border border-[#231610]/10 space-y-1.5">
                <div className="w-8 h-8 rounded-full bg-[#f0e6d9] text-[#b8542b] flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <h3 className="font-serif-cafe text-base font-bold text-[#1f140e]">
                  {lang === "ca" ? "Al Cor de Manresa" : "En el Centro de Manresa"}
                </h3>
                <p className="text-xs text-[#6c594d]">
                  {lang === "ca"
                    ? "Situats a la Muralla del Carme, un dels eixos més vius de la ciutat."
                    : "Situados en la Muralla del Carme, uno de los ejes más vivos de la ciudad."}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#faf7f2] border border-[#231610]/10 space-y-1.5">
                <div className="w-8 h-8 rounded-full bg-[#f0e6d9] text-[#b8542b] flex items-center justify-center">
                  <Coffee className="w-4 h-4" />
                </div>
                <h3 className="font-serif-cafe text-base font-bold text-[#1f140e]">
                  {lang === "ca" ? "Esmorzars de Qualitat" : "Desayunos de Calidad"}
                </h3>
                <p className="text-xs text-[#6c594d]">
                  {lang === "ca"
                    ? "Cafè amb cos, pa acabat de torrar i opcions per a tots els gustos."
                    : "Café con cuerpo, pan recién tostado y opciones para todos los gustos."}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#faf7f2] border border-[#231610]/10 space-y-1.5">
                <div className="w-8 h-8 rounded-full bg-[#f0e6d9] text-[#b8542b] flex items-center justify-center">
                  <Users className="w-4 h-4" />
                </div>
                <h3 className="font-serif-cafe text-base font-bold text-[#1f140e]">
                  {lang === "ca" ? "Tracte Proper" : "Trato Familiar"}
                </h3>
                <p className="text-xs text-[#6c594d]">
                  {lang === "ca"
                    ? "Ambient relaxat per aturar-se una estona o gaudir de bones converses."
                    : "Ambiente relajado para detenerse un rato o disfrutar de buenas conversaciones."}
                </p>
              </div>
            </div>

            {/* Verified Information Guarantee */}
            <div className="p-3.5 rounded-lg bg-[#f4eee5] border border-[#231610]/10 flex items-center gap-3 text-xs text-[#6c594d]">
              <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>
                {lang === "ca"
                  ? "Informació oficial del negoci contrastada: Carrer Muralla del Carme, 11, Manresa."
                  : "Información oficial del negocio contrastada: Carrer Muralla del Carme, 11, Manresa."}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
