import { MenuItem } from "./FoodMenuLeft";

export function DrinkMenu1Left() {
  return (
    <div>
      <img
        src="/fluent-emoji-high-contrast_wine-glass.svg"
        className="block mx-auto w-10 h-10 mb-2"
      />
      <h3 className="text-center font-serif text-2xl font-bold tracking-wide mb-1">
        ◇ VINOS AFRUTADOS ◇
      </h3>
      <MenuItem name="Afrutado" price="$300" />
      <p className="italic text-left text-sm leading-relaxed font-semibold">
        Fructosa → 12%
      </p>
      <MenuItem name="70/30" price="$300" />
      <p className="italic text-left text-sm leading-relaxed font-semibold">
        Fructosa → 12%
      </p>
      <MenuItem name="Cielo Rojo" price="$300" />
      <p className="italic text-left text-sm leading-relaxed font-semibold">
        Fructosa → 12%
      </p>
      <MenuItem name="Tintos con Chocolate" price="$350" />
      <MenuItem name="Copa de Vino Afrutado" price="$110" />
      <img
        src="/pinhead_traditional-storage-jars.svg"
        className="block mx-auto w-10 h-10 mb-2"
      />
      <h3 className="text-center font-serif text-2xl font-bold tracking-wide mb-1">
        ◇ JARRITOS ◇
      </h3>
      <MenuItem name="Tradicional" price="$155" />
      <MenuItem name="Jumbos" price="$310" />
      <MenuItem name="Jarrito con Don Julio Sencillo" price="$190" />
      <MenuItem name="Jarrito con Don Julio Doble" price="$380" />
    </div>
  );
}
