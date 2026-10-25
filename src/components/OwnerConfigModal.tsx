import { useState } from "react";
import { X, Save, RotateCcw, Plus, Trash2, Check, Clock, Utensils, Info, Copy } from "lucide-react";
import {
  Language,
  OwnerEditableConfig,
  INITIAL_OWNER_CONFIG,
  CONFIRMED_OFFERING_CATEGORIES,
  MenuItem,
  UI_STRINGS,
} from "../data/restaurantData";

interface OwnerConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  ownerConfig: OwnerEditableConfig;
  onSaveConfig: (newConfig: OwnerEditableConfig) => void;
}

export default function OwnerConfigModal({
  isOpen,
  onClose,
  lang,
  ownerConfig,
  onSaveConfig,
}: OwnerConfigModalProps) {
  const [formData, setFormData] = useState<OwnerEditableConfig>({ ...ownerConfig });
  const [activeTab, setActiveTab] = useState<"hours" | "menu" | "instructions">("instructions");
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [copiedSuccess, setCopiedSuccess] = useState(false);

  // New item draft state
  const [newItemNameCa, setNewItemNameCa] = useState("");
  const [newItemNameEs, setNewItemNameEs] = useState("");
  const [newItemPrice, setNewItemPrice] = useState("");
  const [newItemCategory, setNewItemCategory] = useState("esmorzars");
  const [newItemDescCa, setNewItemDescCa] = useState("");

  if (!isOpen) return null;

  const t = UI_STRINGS[lang];

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveConfig(formData);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 600);
  };

  const handleAddMenuItem = () => {
    if (!newItemNameCa.trim()) return;

    const newItem: MenuItem = {
      id: "item-" + Date.now(),
      categoryId: newItemCategory,
      name: {
        ca: newItemNameCa.trim(),
        es: newItemNameEs.trim() || newItemNameCa.trim(),
      },
      description: newItemDescCa.trim()
        ? {
            ca: newItemDescCa.trim(),
            es: newItemDescCa.trim(),
          }
        : undefined,
      price: newItemPrice.trim() || undefined,
    };

    setFormData({
      ...formData,
      customMenuItems: [...formData.customMenuItems, newItem],
    });

    setNewItemNameCa("");
    setNewItemNameEs("");
    setNewItemPrice("");
    setNewItemDescCa("");
  };

  const handleRemoveMenuItem = (id: string) => {
    setFormData({
      ...formData,
      customMenuItems: formData.customMenuItems.filter((item) => item.id !== id),
    });
  };

  const handleReset = () => {
    setFormData({ ...INITIAL_OWNER_CONFIG });
  };

  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(formData, null, 2));
    setCopiedSuccess(true);
    setTimeout(() => setCopiedSuccess(false), 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white border border-[#231610]/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#231610]/10 bg-[#faf7f2]">
          <div>
            <h2 className="text-xl font-serif-cafe font-bold text-[#1f140e]">
              {t.ownerPanelTitle}
            </h2>
            <p className="text-xs text-[#6c594d]">
              Montserratina • Carrer Muralla del Carme, 11, Manresa
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-[#5c4a3e] hover:text-[#231610] hover:bg-[#f0e6d9] transition-colors"
            aria-label="Tancar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#231610]/10 bg-[#f4eee5] px-6 text-xs font-semibold">
          <button
            onClick={() => setActiveTab("instructions")}
            className={`py-3 px-4 border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === "instructions"
                ? "border-[#b8542b] text-[#b8542b] bg-white"
                : "border-transparent text-[#5c4a3e] hover:text-[#231610]"
            }`}
          >
            <Info className="w-4 h-4" />
            <span>{lang === "ca" ? "Instruccions" : "Instrucciones"}</span>
          </button>
          <button
            onClick={() => setActiveTab("hours")}
            className={`py-3 px-4 border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === "hours"
                ? "border-[#b8542b] text-[#b8542b] bg-white"
                : "border-transparent text-[#5c4a3e] hover:text-[#231610]"
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>{lang === "ca" ? "Horaris d'Obertura" : "Horarios de Apertura"}</span>
          </button>
          <button
            onClick={() => setActiveTab("menu")}
            className={`py-3 px-4 border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === "menu"
                ? "border-[#b8542b] text-[#b8542b] bg-white"
                : "border-transparent text-[#5c4a3e] hover:text-[#231610]"
            }`}
          >
            <Utensils className="w-4 h-4" />
            <span>{lang === "ca" ? "Plats i Preus Verificats" : "Platos y Precios Verificados"}</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto custom-scrollbar space-y-6 text-sm text-[#463529]">
          {/* Tab 1: Instructions */}
          {activeTab === "instructions" && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#faf7f2] border border-[#231610]/10 space-y-2">
                <span className="font-bold text-[#1f140e] block">
                  {lang === "ca" ? "Guia per al responsable del negoci:" : "Guía para el responsable del negocio:"}
                </span>
                <p className="text-xs text-[#5c4a3e] leading-relaxed">
                  {lang === "ca"
                    ? "Aquest lloc web ha estat construït respectant estrictament les dades reals contrastades de Montserratina (Carrer Muralla del Carme, 11, Manresa, telèfon 938 72 09 26, correu montserratina11@yahoo.es). No s'han inventat preus, opinions de clients ni cartes falses."
                    : "Este sitio web ha sido construido respetando estrictamente los datos reales contrastados de Montserratina (Carrer Muralla del Carme, 11, Manresa, teléfono 938 72 09 26, correo montserratina11@yahoo.es). No se han inventado precios, opiniones de clientes ni cartas falsas."}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif-cafe text-base font-bold text-[#1f140e]">
                  {lang === "ca" ? "Com afegir les dades confirmades:" : "Cómo añadir los datos confirmados:"}
                </h3>
                <ul className="space-y-2 text-xs text-[#5c4a3e] list-disc pl-5">
                  <li>
                    <strong>{lang === "ca" ? "Horaris:" : "Horarios:"}</strong>{" "}
                    {lang === "ca"
                      ? "Podeu introduir el text exacte dels vostres torns de matí i tarda des de la pestanya 'Horaris d'Obertura'."
                      : "Puede introducir el texto exacto de sus turnos de mañana y tarde desde la pestaña 'Horarios de Apertura'."}
                  </li>
                  <li>
                    <strong>{lang === "ca" ? "Plats i Preus:" : "Platos y Precios:"}</strong>{" "}
                    {lang === "ca"
                      ? "Afegiu els vostres entrepans destacats, racions de tapes o especialitats a la pestanya 'Plats i Preus Verificats'."
                      : "Añada sus bocadillos destacados, raciones de tapas o especialidades en la pestaña 'Platos y Precios Verificados'."}
                  </li>
                  <li>
                    <strong>{lang === "ca" ? "Desament:" : "Guardado:"}</strong>{" "}
                    {lang === "ca"
                      ? "Totes les modificacions es guarden a l'instant en el navegador i es mostren immediatament al web."
                      : "Todas las modificaciones se guardan al instante en el navegador y se muestran inmediatamente en la web."}
                  </li>
                </ul>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleCopyJson}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#231610]/15 text-xs font-medium text-[#463529] hover:bg-[#faf7f2] transition-colors"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>
                    {copiedSuccess
                      ? lang === "ca" ? "Copiat al porta-retalls!" : "¡Copiado al portapapeles!"
                      : lang === "ca" ? "Copiar configuració JSON" : "Copiar configuración JSON"}
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* Tab 2: Hours */}
          {activeTab === "hours" && (
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="hasCustomHours"
                  checked={formData.hasCustomHours}
                  onChange={(e) =>
                    setFormData({ ...formData, hasCustomHours: e.target.checked })
                  }
                  className="rounded text-[#b8542b] focus:ring-[#b8542b]"
                />
                <label htmlFor="hasCustomHours" className="text-xs font-bold text-[#1f140e] cursor-pointer">
                  {lang === "ca" ? "Activar text d'horari personalitzat" : "Activar texto de horario personalizado"}
                </label>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#7a482b] block">
                  {lang === "ca" ? "Horari en Català" : "Horario en Catalán"}
                </label>
                <textarea
                  rows={3}
                  value={formData.openingHoursNotes.ca}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      openingHoursNotes: {
                        ...formData.openingHoursNotes,
                        ca: e.target.value,
                      },
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg border border-[#231610]/15 text-xs text-[#1f140e] focus:outline-none focus:border-[#b8542b]"
                  placeholder="Ex: Dilluns a divendres de 07:30 a 20:00. Dissabtes de 08:00 a 15:00."
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#7a482b] block">
                  {lang === "ca" ? "Horari en Castellà" : "Horario en Castellano"}
                </label>
                <textarea
                  rows={3}
                  value={formData.openingHoursNotes.es}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      openingHoursNotes: {
                        ...formData.openingHoursNotes,
                        es: e.target.value,
                      },
                    })
                  }
                  className="w-full px-3 py-2 rounded-lg border border-[#231610]/15 text-xs text-[#1f140e] focus:outline-none focus:border-[#b8542b]"
                  placeholder="Ej: Lunes a viernes de 07:30 a 20:00. Sábados de 08:00 a 15:00."
                />
              </div>
            </div>
          )}

          {/* Tab 3: Menu Items */}
          {activeTab === "menu" && (
            <div className="space-y-6">
              {/* Form to add an item */}
              <div className="p-4 rounded-xl bg-[#faf7f2] border border-[#231610]/10 space-y-3">
                <span className="font-bold text-xs uppercase tracking-wider text-[#b8542b] block">
                  {lang === "ca" ? "Afegir nou plat o beguda verificada:" : "Añadir nuevo plato o bebida verificada:"}
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-medium text-[#7a482b] block mb-1">
                      Nom (Català) *
                    </label>
                    <input
                      type="text"
                      value={newItemNameCa}
                      onChange={(e) => setNewItemNameCa(e.target.value)}
                      placeholder="Ex: Entrepà de pernil ibèric"
                      className="w-full px-3 py-1.5 rounded-lg border border-[#231610]/15 text-xs text-[#1f140e]"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-medium text-[#7a482b] block mb-1">
                      Nombre (Castellano)
                    </label>
                    <input
                      type="text"
                      value={newItemNameEs}
                      onChange={(e) => setNewItemNameEs(e.target.value)}
                      placeholder="Ej: Bocadillo de jamón ibérico"
                      className="w-full px-3 py-1.5 rounded-lg border border-[#231610]/15 text-xs text-[#1f140e]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-medium text-[#7a482b] block mb-1">
                      Categoria
                    </label>
                    <select
                      value={newItemCategory}
                      onChange={(e) => setNewItemCategory(e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg border border-[#231610]/15 text-xs text-[#1f140e]"
                    >
                      {CONFIRMED_OFFERING_CATEGORIES.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.name[lang]}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-[11px] font-medium text-[#7a482b] block mb-1">
                      Preu (Opcional, ex: 4,50 €)
                    </label>
                    <input
                      type="text"
                      value={newItemPrice}
                      onChange={(e) => setNewItemPrice(e.target.value)}
                      placeholder="Ex: 4,50 €"
                      className="w-full px-3 py-1.5 rounded-lg border border-[#231610]/15 text-xs text-[#1f140e]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-medium text-[#7a482b] block mb-1">
                    Descripció / Ingredients confirmats (Opcional)
                  </label>
                  <input
                    type="text"
                    value={newItemDescCa}
                    onChange={(e) => setNewItemDescCa(e.target.value)}
                    placeholder="Ex: Pa de pagès torrat amb tomàquet i oli d'oliva verge"
                    className="w-full px-3 py-1.5 rounded-lg border border-[#231610]/15 text-xs text-[#1f140e]"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleAddMenuItem}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#b8542b] text-white text-xs font-semibold hover:bg-[#933e1c] transition-colors"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>{lang === "ca" ? "Afegir a la carta" : "Añadir a la carta"}</span>
                </button>
              </div>

              {/* Existing items list */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#1f140e] block">
                  {lang === "ca"
                    ? `Plats afegits (${formData.customMenuItems.length}):`
                    : `Platos añadidos (${formData.customMenuItems.length}):`}
                </span>

                {formData.customMenuItems.length === 0 ? (
                  <p className="text-xs text-[#7d6b5e] italic">
                    {lang === "ca"
                      ? "Encara no hi ha plats concrets afegits. Es mostren les categories generals confirmades per no publicar dades inventades."
                      : "Aún no hay platos concretos añadidos. Se muestran las categorías generales confirmadas para no publicar datos inventados."}
                  </p>
                ) : (
                  <div className="space-y-2">
                    {formData.customMenuItems.map((item) => (
                      <div
                        key={item.id}
                        className="p-3 rounded-lg bg-[#faf7f2] border border-[#231610]/10 flex items-center justify-between"
                      >
                        <div>
                          <span className="font-semibold text-xs text-[#1f140e] block">
                            {item.name[lang]} {item.price && `— ${item.price}`}
                          </span>
                          <span className="text-[11px] text-[#6c594d]">
                            {item.description ? item.description[lang] : item.categoryId}
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleRemoveMenuItem(item.id)}
                          className="p-1.5 text-stone-400 hover:text-red-600 transition-colors"
                          title="Eliminar"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-[#231610]/10 bg-[#faf7f2]">
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 text-xs text-[#6c594d] hover:text-[#1f140e] transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{lang === "ca" ? "Restablir valors" : "Restablecer valores"}</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-full text-xs font-medium text-[#5c4a3e] hover:bg-[#f0e6d9] transition-colors"
            >
              {lang === "ca" ? "Cancel·lar" : "Cancelar"}
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="inline-flex items-center gap-1.5 px-5 py-2 rounded-full bg-[#b8542b] hover:bg-[#933e1c] text-white text-xs font-semibold shadow-sm transition-all"
            >
              {savedSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>{lang === "ca" ? "Desat amb èxit!" : "¡Guardado con éxito!"}</span>
                </>
              ) : (
                <>
                  <Save className="w-3.5 h-3.5" />
                  <span>{lang === "ca" ? "Guardar canvis" : "Guardar cambios"}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
