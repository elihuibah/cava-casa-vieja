import { useLanguage } from "../context/useLanguage";
import { RevealEffect } from "../components/RevealEffect";
import reservationsbackground from "../assets/reservations-background.jpg";

function CornerMarks() {
  return (
    <span aria-hidden="true">
      <span className="absolute top-3 left-3 w-8 h-8 border-t-3 border-l-3 border-amber-800/50 pointer-events-none" />
      <span className="absolute top-3 right-3 w-8 h-8 border-t-3 border-r-3 border-amber-800/50 pointer-events-none" />
      <span className="absolute bottom-3 left-3 w-8 h-8 border-b-3 border-l-3 border-amber-800/50 pointer-events-none" />
      <span className="absolute bottom-3 right-3 w-8 h-8 border-b-3 border-r-3 border-amber-800/50 pointer-events-none" />
    </span>
  );
}

export function ReservationsPage() {
  const { t } = useLanguage();
  const whatsappUrl = `https://wa.me/526651137613?text=${encodeURIComponent(t("reservations.whatsappMessage"))}`;
  return (
    <section
      id="reservaciones"
      className="relative py-24 px-8 bg-cover bg-center text-stone-900"
      style={{ backgroundImage: `url(${reservationsbackground})` }}
    >
      <div className="absolute inset-0 bg-stone-50/70" />
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          {t("reservations.title")}
        </h2>
        <div className="w-full h-0.5 bg-stone-900 mb-12" />

        {/* Side by side only from lg; stacked cards stay readable below. */}
        <div className="grid lg:grid-cols-2 gap-10 max-w-xl lg:max-w-none mx-auto">
          <RevealEffect delay={0} className="relative bg-stone-200 p-6 md:p-10">
            <CornerMarks />
            <h3 className="font-serif text-center font-bold text-2xl md:text-3xl mb-4">
              {t("reservations.schedule")}
            </h3>
            <div className="grid grid-cols-[auto_1fr] gap-6 items-center">
              <div className="flex items-center justify-center">
                <img
                  src={`${import.meta.env.BASE_URL}healthicons_i-schedule-school-date-time.svg`}
                  className="w-16 h-16 md:w-24 md:h-24"
                  alt=""
                />
              </div>
              <div className="text-left space-y-4">
                <p className="text-stone-900 leading-relaxed text-xl md:text-2xl">
                  {t("reservations.weekendDays")} <br />
                  {t("reservations.weekendHours")}
                </p>
                <p className="text-stone-900 leading-relaxed text-xl md:text-2xl">
                  {t("reservations.weekdaysDays")} <br />
                  {t("reservations.weekdaysHours")}
                </p>
              </div>
            </div>
          </RevealEffect>

          <RevealEffect delay={200} className="relative bg-stone-200 p-6 md:p-10">
            <CornerMarks />
            <h3 className="font-serif font-bold text-2xl md:text-3xl text-center mb-4">
              {t("reservations.contact")}
            </h3>
            <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-5 items-center text-left">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-hidden="true"
                tabIndex={-1}
                className="flex items-center gap-4 hover:opacity-70 transition"
              >
                <img
                  src={`${import.meta.env.BASE_URL}basil_whatsapp-solid.svg`}
                  className="w-10 h-10 md:w-12 md:h-12"
                  alt=""
                />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp: 665 113 7613"
                className="flex items-center gap-4 hover:opacity-70 transition"
              >
                <p className="text-stone-900 text-xl md:text-2xl wrap-anywhere">665 113 7613</p>
              </a>
              <a
                href="https://m.me/cavacasavieja"
                target="_blank"
                rel="noopener noreferrer"
                aria-hidden="true"
                tabIndex={-1}
                className="flex items-center gap-4 hover:opacity-70 transition"
              >
                <img
                  src={`${import.meta.env.BASE_URL}mdi_facebook.svg`}
                  className="w-10 h-10 md:w-12 md:h-12"
                  alt=""
                />
              </a>
              <a
                href="https://m.me/cavacasavieja"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Messenger: Cava Casa Vieja"
                className="flex items-center gap-4 hover:opacity-70 transition"
              >
                <p className="text-stone-900 text-xl md:text-2xl wrap-anywhere">Cava Casa Vieja</p>
              </a>

              <a
                href="https://ig.me/m/cavacasavieja/"
                target="_blank"
                rel="noopener noreferrer"
                aria-hidden="true"
                tabIndex={-1}
                className="flex items-center gap-4 hover:opacity-70 transition"
              >
                <img
                  src={`${import.meta.env.BASE_URL}formkit_instagram.svg`}
                  className="w-10 h-10 md:w-12 md:h-12"
                  alt=""
                />
              </a>
              <a
                href="https://ig.me/m/cavacasavieja/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram: Cava Casa Vieja"
                className="flex items-center gap-4 hover:opacity-70 transition"
              >
                <p className="text-stone-900 text-xl md:text-2xl wrap-anywhere">Cava Casa Vieja</p>
              </a>
              <a
                href="mailto:cavacasavieja@hotmail.com"
                aria-hidden="true"
                tabIndex={-1}
                className="flex items-center gap-4 hover:opacity-70 transition"
              >
                <img
                  src={`${import.meta.env.BASE_URL}material-symbols-light_mail-sharp.svg`}
                  className="w-10 h-10 md:w-12 md:h-12"
                  alt=""
                />
              </a>
              <a
                href="mailto:cavacasavieja@hotmail.com"
                aria-label={`${t("reservations.emailAlt")}: cavacasavieja@hotmail.com`}
                className="flex items-center gap-4 hover:opacity-70 transition"
              >
                {/* <wbr>: if it doesn't fit, break after the @ only. */}
                <p className="text-stone-900 text-xl md:text-2xl">
                  cavacasavieja@
                  <wbr />
                  hotmail.com
                </p>
              </a>
            </div>
          </RevealEffect>
        </div>

        <div className="w-full h-0.5 bg-stone-900 mt-12" />
      </div>
    </section>
  );
}
