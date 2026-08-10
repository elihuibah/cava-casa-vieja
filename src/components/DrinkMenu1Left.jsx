import { MenuItem } from "./MenuItem";

export function DrinkMenu1Left() {
  return (
    <div>
      <img
        src="/fluent-emoji-high-contrast_wine-glass.svg"
        className="block mx-auto w-8 h-8"
      />
      <h3 className="text-center font-serif text-xl font-bold tracking-wide">
        ◇ VINOS AFRUTADOS ◇
      </h3>

      <div className="grid grid-cols-2 items-start mt-4">
        <div className="left-column">
          <MenuItem name="Afrutado" price="$300" priceClassName="mr-4" />
          <p className="italic text-left leading-relaxed mb-4 text-stone-600">
            Fructosa → 12%
          </p>
          <MenuItem name="70/30" price="$300" priceClassName="mr-4" />
          <p className="italic text-left mb-4 leading-relaxed text-stone-600">
            Fructosa → 12%
          </p>
          <MenuItem name="Cielo Rojo" price="$300" priceClassName="mr-4" />
          <p className="italic text-left mb-4 leading-relaxed text-stone-600">
            Fructosa → 12%
          </p>
        </div>
        <div className="right-column border-l border-stone-400 pl-4 h-48 space-y-4">
          <MenuItem name="Tintos con Chocolate" price="$350" />
          <MenuItem name="Copa de Vino Afrutado" price="$110" />
        </div>
      </div>

      <img
        src="/pinhead_traditional-storage-jars.svg"
        className="block mx-auto w-8 h-8 mt-4"
      />
      <h3 className="text-center font-serif text-xl font-bold tracking-wide">
        ◇ JARRITOS ◇
      </h3>
      <div className="space-y-4">
        <MenuItem name="Tradicional" price="$155" />
        <MenuItem name="Jumbos" price="$310" />
        <MenuItem name="Jarrito con Don Julio Sencillo" price="$190" />
        <MenuItem name="Jarrito con Don Julio Doble" price="$380" />
      </div>
    </div>
  );
}
