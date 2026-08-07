import { MenuItem } from "./FoodMenuLeft";

export function DrinkMenu2Left() {
  return (
    <div>
      <img src="/ion_beer.svg" className="block mx-auto w-10 h-10 mb-2" />
      <h3 className="text-center font-serif text-2xl font-bold tracking-wide mb-1">
        ◇ CERVEZAS ◇
      </h3>
      <MenuItem name="Bote y/o Media Nacional" price="$55" />
      <p className="italic text-left text-sm leading-relaxed font-semibold">
        Tecate Roja, Tecate Light, XX, Indio, Corona o Modelo
      </p>
      <MenuItem name="Cerveza de Importación" price="$60" />
      <p className="italic text-left text-sm leading-relaxed font-semibold">
        Michelob, Ultra o Bohemia
      </p>
      <MenuItem name="Cerveza Artesanal" price="$95" />
      <p className="italic text-left text-sm leading-relaxed font-semibold">
        Stout, IPA, Brown Ale, Lagger o Dunkel
      </p>
      <MenuItem name="Clamato con Cerveza" price="$135" />
      <MenuItem name="Clamato Preparado" price="$130" />
      <MenuItem name="Michelada con Cerveza de Importación" price="$140" />

      <img
        src="/icon-park-solid_cola.svg"
        className="block mx-auto w-10 h-10 mb-2"
      />
      <h3 className="text-center font-serif text-2xl font-bold tracking-wide mb-1">
        ◇ SIN ALCOHOL ◇
      </h3>
    </div>
  );
}
