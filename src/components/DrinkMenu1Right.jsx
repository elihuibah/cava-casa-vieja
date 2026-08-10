import { MenuItem } from "./MenuItem";

export function DrinkMenu1Right() {
  return (
    <div>
      <img
        src="/game-icons_wine-bottle.svg"
        className="block mx-auto w-8 h-8"
      />
      <h3 className="text-center font-serif text-xl font-bold tracking-wide">
        ◇ LÍNEA DE VINO "DON ENRIQUE" ◇
      </h3>
      <div className="space-y-4 mt-4">
        <MenuItem name="Nebiolo" price="$540" />
        <MenuItem name="Petite Sirah" price="$540" />
        <MenuItem name="Cabernet Saugvinon" price="$540" />
        <MenuItem name="Cabernet Franc" price="$540" />
        <MenuItem name="Armonía de Tintos" price="$540" />
        <MenuItem name="Copa de Vino" price="$140" />
      </div>
      <img
        src="/solar_wineglass-bold.svg"
        className="block mx-auto w-8 h-8 mt-4"
      />
      <h3 className="text-center font-serif text-xl font-bold tracking-wide">
        ◇ SANGRÍAS ◇
      </h3>
      <div className="space-y-4">
        <MenuItem name="Copa de Sangría" price="$130" />
        <MenuItem name="Sangría de 1L" price="$200" />
        <MenuItem name="Sangría de 2L" price="$335" />
      </div>
    </div>
  );
}
