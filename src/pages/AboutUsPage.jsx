export function AboutUsPage() {
  return (
    <section className="relative py-32 px-8 md:px-16 bg-linear-to-r from-stone-50 via-stone-100 to-stone-300 overflow-hidden">
      <div
        className="absolute inset-0 bg-no-repeat bg-right opacity-10 pointer-events-none"
        style={{ backgroundImage: "url('/origenes-laus.jpg')" }}
      />

      <div className="columns relative grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        <div className="collage relative w-full max-w-md mx-auto aspect-4/5">
          <div className="brown-border absolute top-8 left-8 right-12 -bottom-8 border-3 border-amber-800/40 z-0" />
          <div className="gray-square absolute top-2 right-34 w-24 h-24 bg-neutral-500 z-0" />
          <img
            src="/DSC01279.JPG"
            alt="Letrero de 'La Cava'"
            className="absolute top-14 left-0 w-3/5 aspect-4/5 object-cover shadow-xl/25 z-20"
          />
          <img
            src="/475122804_2687146191495051_646480903382055388_n.jpg"
            alt="Botella de vino 'Don Enrique'"
            className="absolute -bottom-14 right-0 w-3/5 aspect-4/5 object-cover shadow-xl/25 z-30"
          />
          <svg
            className="absolute -bottom-2 -left-2 w-38 h-38 text-neutral-500 z-0"
            viewBox="0 0 100 100"
            fill="none"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <circle
              cx="50"
              cy="50"
              r="35"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <circle
              cx="50"
              cy="50"
              r="30"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <circle
              cx="50"
              cy="50"
              r="25"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <circle
              cx="50"
              cy="50"
              r="20"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <circle
              cx="50"
              cy="50"
              r="15"
              stroke="currentColor"
              strokeWidth="0.5"
            />
            <circle
              cx="50"
              cy="50"
              r="10"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </svg>
        </div>

        <div className="text-column">
          <h2 className="font-serif text-xl md:text-4xl font-bold text-stone-800 leading-tight mb-10 text-center">
            AQUÍ COMIENZA LA VIEJA
            <br />
            RUTA DEL VINO
          </h2>
          <p className="text-stone-900 leading-relaxed text-xl">
            <span className="float-left mr-3 mt-1 flex items-center justify-center w-10 h-10 bg-taupe-200 text-3xl font-serif font-bold text-stone-800 shadow-[-4px_4px_0_0_#78716c]">
              F
            </span>
            undada en 2015, Cava Casa Vieja ofrece una experiencia única donde
            las pizzetas artesanales y vinos selectos se combinan en un ambiente
            cálido y acogedor, creando la experiencia perfecta para relajarse y
            compartir momentos inolvidables.
          </p>

          <div className="line flex items-center gap-4 my-8 clear-left">
            <div className="flex-1 h-px bg-stone-400" />
            <img src="/boxicons_wine-filled.svg" />
            <div className="flex-1 h-px bg-stone-400" />
          </div>

          <p className="text-stone-900 leading-relaxed text-xl">
            <span className="float-left mr-3 mt-1 flex items-center justify-center w-10 h-10 bg-taupe-200 text-3xl font-serif font-bold text-stone-800 shadow-[-4px_4px_0_0_#78716c]">
              C
            </span>
            ava Casa Vieja invita a descubrir una carta pensada al detalle:
            pizzetas horneadas con masa madre, tablas de quesos y carnes frías,
            y una selección de vinos y bebidas que van desde etiquetas de la
            casa hasta clásicos infalibles para cada paladar.
          </p>
        </div>
      </div>
    </section>
  );
}
