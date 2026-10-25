import { Clock, Phone, CheckCircle2, AlertCircle, Calendar } from "lucide-react";
import { Language, VERIFIED_BUSINESS_DATA, UI_STRINGS } from "../data/restaurantData";

interface ScheduleSectionProps {
  lang: Language;
}

export default function ScheduleSection({ lang }: ScheduleSectionProps) {
  const t = UI_STRINGS[lang];
  const todayDayId = new Date().getDay(); // 0 is Sunday, 1 is Monday, etc.

  return (
    <section id="horaris" className="py-20 bg-[#f4eee5] border-t border-b border-[#231610]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text & Status */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#231610]/10 text-xs font-semibold text-[#7a482b]">
              <Clock className="w-3.5 h-3.5 text-[#b8542b]" />
              <span>{lang === "ca" ? "Horaris Oficials Confirmats" : "Horarios Oficiales Confirmados"}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-serif-cafe font-bold text-[#1f140e] leading-tight">
              {t.scheduleHeading}
            </h2>

            <p className="text-sm sm:text-base text-[#5c4a3e] leading-relaxed">
              {t.scheduleSub}
            </p>

            {/* Tap to Call Quick Card */}
            <div className="p-5 rounded-2xl bg-white border border-[#231610]/10 space-y-3 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-[#7a482b] block">
                {lang === "ca" ? "Consultes o encàrrecs per telèfon:" : "Consultas o encargos por teléfono:"}
              </span>
              <a
                href={`tel:${VERIFIED_BUSINESS_DATA.phoneClean}`}
                className="inline-flex items-center gap-3 text-lg font-serif-cafe font-bold text-[#1f140e] hover:text-[#b8542b] transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-[#b8542b] text-white flex items-center justify-center shadow-xs">
                  <Phone className="w-4 h-4" />
                </div>
                <span>{VERIFIED_BUSINESS_DATA.phone}</span>
              </a>
              <p className="text-xs text-[#7d6b5e]">
                {lang === "ca"
                  ? "Atenció directa durant tot l'horari de servei a la Muralla del Carme."
                  : "Atención directa durante todo el horario de servicio en la Muralla del Carme."}
              </p>
            </div>
          </div>

          {/* Right Hours Schedule Table */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-[#231610]/10 shadow-lg space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-[#231610]/10">
              <div className="flex items-center gap-2 text-sm font-bold text-[#1f140e]">
                <Calendar className="w-4 h-4 text-[#b8542b]" />
                <span>{lang === "ca" ? "Jornada Setmanal" : "Jornada Semanal"}</span>
              </div>
              <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#4c583f]/10 text-[#4c583f]">
                {lang === "ca" ? "Servei de Dilluns a Dissabte" : "Servicio de Lunes a Sábado"}
              </span>
            </div>

            {/* List of days */}
            <div className="divide-y divide-[#231610]/5">
              {VERIFIED_BUSINESS_DATA.schedule.map((item) => {
                const isToday = item.dayId === todayDayId;
                return (
                  <div
                    key={item.dayId}
                    className={`py-3.5 px-3 rounded-xl flex items-center justify-between transition-colors ${
                      isToday
                        ? "bg-[#faf7f2] font-semibold border-l-4 border-[#b8542b]"
                        : "hover:bg-[#faf7f2]/60"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-[#1f140e]">
                        {item.dayName[lang]}
                      </span>
                      {isToday && (
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#b8542b] text-white">
                          {lang === "ca" ? "Avui" : "Hoy"}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`text-sm ${
                          item.isOpen ? "text-[#463529]" : "text-[#933e1c] font-medium italic"
                        }`}
                      >
                        {item.hours}
                      </span>
                      {item.isOpen && (
                        <div className="w-2 h-2 rounded-full bg-emerald-500 hidden sm:block" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Verified citation */}
            <div className="pt-3 border-t border-[#231610]/10 flex items-center justify-between text-xs text-[#7d6b5e]">
              <span>Muralla del Carme, 11 • Manresa</span>
              <span className="italic">
                {lang === "ca" ? "Descans setmanal diumenges" : "Descanso semanal domingos"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
