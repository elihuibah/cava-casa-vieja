import { useLanguage } from "../context/useLanguage";

export function LocationPage() {
  const { t } = useLanguage();
  return (
    <section id="ubicacion" className="relative pt-16 px-8">
      <div className="max-w-5xl mx-auto text-center text-stone-100">
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          {t("location.title")}
        </h2>
        <address className="text-lg md:text-xl font-serif not-italic mb-6">
          {t("location.address")}
        </address>
        <div className="relative w-full max-w-3xl mx-auto aspect-square sm:aspect-video overflow-hidden border-3 border-stone-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1552.3891759134667!2d-116.64203745439525!3d32.56493192533742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d912c31b9a4c65%3A0xce90d2c4aadc9e18!2sCava%20Gonzalez!5e0!3m2!1ses-419!2smx!4v1786221531479!5m2!1ses-419!2smx"
            className="absolute inset-0 w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={t("location.mapTitle")}
          />
        </div>
      </div>
    </section>
  );
}
