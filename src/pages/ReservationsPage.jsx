import { RevealEffect } from "../components/RevealEffect";
import reservationsbackground from "../assets/reservations-background.jpg";

function CornerMarks() {
  return (
    <>
      <span className="absolute top-3 left-3 w-8 h-8 border-t-3 border-l-3 border-amber-800/50 pointer-events-none" />
      <span className="absolute top-3 right-3 w-8 h-8 border-t-3 border-r-3 border-amber-800/50 pointer-events-none" />
      <span className="absolute bottom-3 left-3 w-8 h-8 border-b-3 border-l-3 border-amber-800/50 pointer-events-none" />
      <span className="absolute bottom-3 right-3 w-8 h-8 border-b-3 border-r-3 border-amber-800/50 pointer-events-none" />
    </>
  );
}

export function ReservationsPage() {
  return (
    <section
      id="reservaciones"
      className="scroll-mt-24 relative py-24 px-8 bg-cover bg-center text-stone-900"
      style={{ backgroundImage: `url(${reservationsbackground})` }}
    >
      <div className="absolute inset-0 bg-stone-50/70" />
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="font-serif text-5xl font-bold mb-6">RESERVA AHORA</h2>
        <div className="w-full h-0.5 bg-stone-900 mb-12" />

        <div className="grid md:grid-cols-2 gap-10">
          <RevealEffect delay={0} className="relative bg-stone-200 p-10">
            <CornerMarks />
            <h3 className="font-serif text-center font-bold text-3xl mb-4">
              HORARIO
            </h3>
            <div className="grid grid-cols-[auto_1fr] gap-6 items-center">
              <div className="flex items-center justify-center">
                <img
                  src="/healthicons_i-schedule-school-date-time.svg"
                  className="w-24 h-24"
                />
              </div>
              <div className="text-left">
                <p className="text-stone-900 leading-relaxed text-2xl">
                  Viernes y Sábado: <br /> 05:00 P.M. - 12:00 A.M.
                </p>
                <p className="text-stone-900 leading-relaxed text-2xl mt-4">
                  Domingo a Jueves: <br /> CERRADO
                </p>
              </div>
            </div>
          </RevealEffect>

          <RevealEffect delay={200} className="relative bg-stone-200 p-10">
            <CornerMarks />
            <h3 className="font-serif font-bold text-3xl text-center mb-4">
              CONTACTO
            </h3>
            <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-5 items-center text-left">
              <img src="/basil_whatsapp-solid.svg" className="w-12 h-12" />
              <p className="text-stone-900 text-2xl">665 113 7613</p>
              <img src="/mdi_facebook.svg" className="w-12 h-12" />
              <p className="text-stone-900 text-2xl">Cava Casa Vieja</p>
              <img src="/formkit_instagram.svg" className="w-12 h-12" />
              <p className="text-stone-900 text-2xl">Cava Casa Vieja</p>
              <img
                src="/material-symbols-light_mail-sharp.svg"
                className="w-12 h-12"
              />
              <p className="text-stone-900 text-2xl">
                cavacasavieja@hotmail.com
              </p>
            </div>
          </RevealEffect>
        </div>

        <div className="w-full h-0.5 bg-stone-900 mt-12" />
      </div>
    </section>
  );
}
