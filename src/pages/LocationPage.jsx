import { useLanguage } from "../context/useLanguage";
import locationbackground from "../assets/location-background.jpg";

export function LocationPage() {
  const { t } = useLanguage();
  return (
    <section
      id="ubicacion"
      className="scroll-mt-24 relative py-16 px-8 bg-cover bg-center"
      style={{ backgroundImage: `url(${locationbackground})` }}
    >
      <div className="absolute inset-0 bg-olive-600/70" />
      <div className="relative z-10 max-w-5xl mx-auto text-center text-stone-100">
        <h2 className="font-serif text-5xl font-bold mb-6">
          {t("location.title")}
        </h2>
        <p className="text-xl font-serif mb-6">
          Visítenos Boulevard Federico Benítez, No. 2500-2, Rancho González,
          21450, Tecate, Baja California, México
        </p>
        <div className="relative w-full max-w-3x h-100 mx-auto aspect-video overflow-hidden border-3 border-stone-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1552.3891759134667!2d-116.64203745439525!3d32.56493192533742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d912c31b9a4c65%3A0xce90d2c4aadc9e18!2sCava%20Gonzalez!5e0!3m2!1ses-419!2smx!4v1786221531479!5m2!1ses-419!2smx"
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación de Cava Casa Vieja"
          />
        </div>
      </div>
    </section>
  );
}
