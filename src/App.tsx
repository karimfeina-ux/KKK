/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import OfferingsSection from "./components/OfferingsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import OwnerConfigModal from "./components/OwnerConfigModal";
import {
  Language,
  OwnerEditableConfig,
  INITIAL_OWNER_CONFIG,
  VERIFIED_BUSINESS_DATA,
} from "./data/restaurantData";

export default function App() {
  // Primary language is Catalan ('ca'), with Spanish switcher ('es')
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem("montserratina_lang");
    if (saved === "es" || saved === "ca") return saved;
    return "ca";
  });

  // Owner custom configuration (hours and menu items)
  const [ownerConfig, setOwnerConfig] = useState<OwnerEditableConfig>(() => {
    const saved = localStorage.getItem("montserratina_owner_config");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return INITIAL_OWNER_CONFIG;
      }
    }
    return INITIAL_OWNER_CONFIG;
  });

  const [ownerModalOpen, setOwnerModalOpen] = useState(false);

  const handleLanguageChange = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem("montserratina_lang", newLang);
  };

  const handleSaveOwnerConfig = (newConfig: OwnerEditableConfig) => {
    setOwnerConfig(newConfig);
    localStorage.setItem("montserratina_owner_config", JSON.stringify(newConfig));
  };

  return (
    <div className="min-h-screen bg-[#faf7f2] text-[#231610] selection:bg-[#df7b53] selection:text-white flex flex-col font-sans">
      {/* Header & Navigation */}
      <Navbar
        lang={lang}
        onLanguageChange={handleLanguageChange}
        onOpenOwnerPanel={() => setOwnerModalOpen(true)}
      />

      {/* Main Content */}
      <main className="flex-1">
        <HeroSection lang={lang} />
        <AboutSection lang={lang} />
        <OfferingsSection
          lang={lang}
          ownerConfig={ownerConfig}
          onOpenOwnerPanel={() => setOwnerModalOpen(true)}
        />
        <ContactSection lang={lang} ownerConfig={ownerConfig} />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onLanguageChange={handleLanguageChange}
        onOpenOwnerPanel={() => setOwnerModalOpen(true)}
      />

      {/* Owner Configuration Modal */}
      <OwnerConfigModal
        isOpen={ownerModalOpen}
        onClose={() => setOwnerModalOpen(false)}
        lang={lang}
        ownerConfig={ownerConfig}
        onSaveConfig={handleSaveOwnerConfig}
      />
    </div>
  );
}
