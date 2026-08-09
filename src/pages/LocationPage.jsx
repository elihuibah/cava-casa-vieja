import { Icon } from "../components/Icon";
import locationbackground from "../assets/location-background.jpg";

export function LocationPage() {
  return (
    <section
      className="relative py-16 px-8 bg-cover bg-center"
      style={{ backgroundImage: `url(${locationbackground})` }}
    >
      <div className="absolute inset-0 bg-olive-600/70" />
      <div className="relative z-10 max-w-5xl mx-auto text-center text-stone-100">
        <h2 className="font-serif text-5xl font-bold mb-6">UBICACIÓN</h2>
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
        <div className="line flex items-center gap-4 my-8 clear-left mt-12">
          <div className="flex-1 h-px bg-stone-100" />
          <Icon
            src="/boxicons_wine-filled.svg"
            colorClass="bg-stone-100"
            className="block mx-auto w-7.5 h-7.5 mb-2"
          />
          <div className="flex-1 h-px bg-stone-100" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto text-center text-stone-100">
          <img
            src="./Logo.svg"
            alt="Logo"
            className="items-center relative z-10 max-w-5xl mx-auto"
          />
          <p className="mt-3">
            Cava Casa Vieja. Todos los derechos reservados. &copy;{" "}
            {new Date().getFullYear()}.
          </p>
          <p className="mt-6">
            Las imágenes son usadas por motivos de ilustración solamente. La
            venta de bebidas alcohólicas a personas menores de 18 años de edad
            está estrictamente prohibida. Disfrute con moderación. Si bebe, no
            conduzca.
          </p>
        </div>
      </div>
    </section>
  );
}
