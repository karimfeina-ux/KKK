import { useState, useEffect } from "react";
import { Phone, Menu, X, Instagram } from "lucide-react";
import { Language, VERIFIED_BUSINESS_DATA, UI_STRINGS } from "../data/restaurantData";

interface NavbarProps {
  lang: Language;
  onLanguageChange: (newLang: Language) => void;
}

export default function Navbar({
  lang,
  onLanguageChange,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = UI_STRINGS[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.navHome, href: "#inici" },
    { label: t.navAbout, href: "#historia" },
    { label: t.navOfferings, href: "#oferta" },
    { label: "Galeria & IG", href: "#galeria" },
    { label: t.navSchedule, href: "#horaris" },
    { label: t.navContact, href: "#contacte" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#faf7f2]/95 backdrop-blur-md shadow-md border-b border-[#231610]/10 py-3"
          : "bg-[#faf7f2]/85 backdrop-blur-sm py-4 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand identity with official seal */}
        <a href="#inici" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-full overflow-hidden bg-white border border-[#231610]/15 shadow-sm shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform">
            <img
              src={VERIFIED_BUSINESS_DATA.logoSeal}
              alt="La Montserratina - Espai Gastronòmic"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif-cafe text-xl sm:text-2xl font-bold tracking-tight text-[#231610] leading-none group-hover:text-[#b8542b] transition-colors">
              {VERIFIED_BUSINESS_DATA.name}
            </span>
            <span className="text-[11px] font-medium tracking-wide text-[#6c594d] mt-1">
              Muralla del Carme, 11 • Manresa
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Navegació principal">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-wider font-semibold text-[#463529] hover:text-[#b8542b] transition-colors relative py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Language Switcher */}
          <div className="flex items-center bg-[#f0e6d9] p-1 rounded-full border border-[#231610]/10 text-xs font-bold">
            <button
              onClick={() => onLanguageChange("ca")}
              className={`px-2.5 py-1 rounded-full transition-all ${
                lang === "ca"
                  ? "bg-[#b8542b] text-white shadow-xs"
                  : "text-[#5c4a3e] hover:text-[#231610]"
              }`}
              aria-label="Canviar a Català"
            >
              CA
            </button>
            <button
              onClick={() => onLanguageChange("es")}
              className={`px-2.5 py-1 rounded-full transition-all ${
                lang === "es"
                  ? "bg-[#b8542b] text-white shadow-xs"
                  : "text-[#5c4a3e] hover:text-[#231610]"
              }`}
              aria-label="Cambiar a Español"
            >
              ES
            </button>
          </div>

          {/* Instagram Social Link */}
          <a
            href={VERIFIED_BUSINESS_DATA.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-[#231610]/15 text-[#5c4a3e] hover:text-[#b8542b] hover:bg-[#f0e6d9] transition-colors shadow-2xs"
            aria-label="Instagram @lamontserratinamanresa"
            title="@lamontserratinamanresa"
          >
            <Instagram className="w-4 h-4" />
          </a>

          {/* Tap-to-Call Phone Button */}
          <a
            href={`tel:${VERIFIED_BUSINESS_DATA.phoneClean}`}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#231610] text-[#faf7f2] hover:bg-[#b8542b] transition-all text-xs font-semibold shadow-xs hover:shadow-sm"
            aria-label={`${t.navCall}: ${VERIFIED_BUSINESS_DATA.phone}`}
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{VERIFIED_BUSINESS_DATA.phone}</span>
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex sm:hidden items-center gap-2">
          {/* Language switch */}
          <div className="flex items-center bg-[#f0e6d9] p-0.5 rounded-full border border-[#231610]/10 text-xs font-bold">
            <button
              onClick={() => onLanguageChange("ca")}
              className={`px-2 py-0.5 rounded-full ${
                lang === "ca" ? "bg-[#b8542b] text-white" : "text-[#5c4a3e]"
              }`}
            >
              CA
            </button>
            <button
              onClick={() => onLanguageChange("es")}
              className={`px-2 py-0.5 rounded-full ${
                lang === "es" ? "bg-[#b8542b] text-white" : "text-[#5c4a3e]"
              }`}
            >
              ES
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-[#231610] hover:bg-[#f0e6d9]"
            aria-label="Obrir menú"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#faf7f2] border-b border-[#231610]/15 px-6 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#231610] hover:text-[#b8542b] py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 border-t border-[#231610]/10 flex flex-col gap-2.5">
            <a
              href={`tel:${VERIFIED_BUSINESS_DATA.phoneClean}`}
              className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#b8542b] text-white font-semibold text-sm shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>{t.navCall}: {VERIFIED_BUSINESS_DATA.phone}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
