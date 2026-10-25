import { MapPin, Phone, Mail, ArrowUp, ShieldCheck, Instagram } from "lucide-react";
import { Language, VERIFIED_BUSINESS_DATA, UI_STRINGS } from "../data/restaurantData";

interface FooterProps {
  lang: Language;
  onLanguageChange: (newLang: Language) => void;
}

export default function Footer({
  lang,
  onLanguageChange,
}: FooterProps) {
  const t = UI_STRINGS[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1f140e] text-[#faf7f2] pt-16 pb-12 border-t border-[#b8542b]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info & Story */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-white border border-white/20 flex items-center justify-center shrink-0 shadow-xs">
                <img
                  src={VERIFIED_BUSINESS_DATA.logoSeal}
                  alt="La Montserratina - Espai Gastronòmic"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-serif-cafe text-2xl font-bold tracking-tight text-white">
                {VERIFIED_BUSINESS_DATA.name}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#d4c3b6] leading-relaxed max-w-sm">
              {VERIFIED_BUSINESS_DATA.heritageStory[lang].slice(0, 180)}...
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#a89585]">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{t.footerVerifiedNotice}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#df7b53] block">
              {lang === "ca" ? "Navegació" : "Navegación"}
            </span>
            <ul className="space-y-2 text-xs text-[#d4c3b6]">
              <li>
                <a href="#inici" className="hover:text-white transition-colors">
                  {t.navHome}
                </a>
              </li>
              <li>
                <a href="#historia" className="hover:text-white transition-colors">
                  {t.navAbout}
                </a>
              </li>
              <li>
                <a href="#oferta" className="hover:text-white transition-colors">
                  {t.navOfferings}
                </a>
              </li>
              <li>
                <a href="#galeria" className="hover:text-white transition-colors">
                  Galeria & Instagram
                </a>
              </li>
              <li>
                <a href="#horaris" className="hover:text-white transition-colors">
                  {t.navSchedule}
                </a>
              </li>
              <li>
                <a href="#contacte" className="hover:text-white transition-colors">
                  {t.navContact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#df7b53] block">
              {lang === "ca" ? "Dades Oficials" : "Datos Oficiales"}
            </span>
            <div className="space-y-2 text-xs text-[#d4c3b6]">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#df7b53] mt-0.5 shrink-0" />
                <span>{VERIFIED_BUSINESS_DATA.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#df7b53] shrink-0" />
                <a
                  href={`tel:${VERIFIED_BUSINESS_DATA.phoneClean}`}
                  className="hover:text-white transition-colors"
                >
                  {VERIFIED_BUSINESS_DATA.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#df7b53] shrink-0" />
                <a
                  href={`mailto:${VERIFIED_BUSINESS_DATA.email}`}
                  className="hover:text-white transition-colors break-all"
                >
                  {VERIFIED_BUSINESS_DATA.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Instagram className="w-3.5 h-3.5 text-[#df7b53] shrink-0" />
                <a
                  href={VERIFIED_BUSINESS_DATA.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-xs font-medium"
                >
                  {VERIFIED_BUSINESS_DATA.instagramHandle}
                </a>
              </div>
            </div>

            {/* Language Switcher in footer */}
            <div className="pt-3 flex items-center gap-2">
              <span className="text-[11px] text-[#a89585]">
                {lang === "ca" ? "Idioma:" : "Idioma:"}
              </span>
              <button
                onClick={() => onLanguageChange("ca")}
                className={`px-2.5 py-0.5 rounded text-xs font-semibold ${
                  lang === "ca" ? "bg-[#b8542b] text-white" : "text-[#d4c3b6] hover:text-white"
                }`}
              >
                Català
              </button>
              <span className="text-[#a89585]">|</span>
              <button
                onClick={() => onLanguageChange("es")}
                className={`px-2.5 py-0.5 rounded text-xs font-semibold ${
                  lang === "es" ? "bg-[#b8542b] text-white" : "text-[#d4c3b6] hover:text-white"
                }`}
              >
                Castellano
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a89585]">
          <p>
            © {new Date().getFullYear()} {VERIFIED_BUSINESS_DATA.name} (Muralla del Carme, 11, Manresa). {t.footerRights}
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-[#d4c3b6] hover:text-white transition-colors"
          >
            <span>{lang === "ca" ? "Tornar a dalt" : "Volver arriba"}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
