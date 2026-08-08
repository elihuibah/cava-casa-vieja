import { MenuItem } from "./MenuItem";

export function DrinkMenu2Left() {
  return (
    <div>
      <img src="/ion_beer.svg" className="block mx-auto w-10 h-10 mb-2" />
      <h3 className="text-center font-serif text-xl font-bold tracking-wide mb-1">
        ◇ CERVEZAS ◇
      </h3>
      <MenuItem name="Bote y/o Media Nacional" price="$55" />
      <p className="italic text-left mb-5 leading-relaxed text-stone-600">
        Tecate Roja, Tecate Light, XX, Indio, Corona o Modelo
      </p>
      <MenuItem name="Cerveza de Importación" price="$60" />
      <p className="italic text-left mb-5 leading-relaxed text-stone-600">
        Michelob, Ultra o Bohemia
      </p>
      <MenuItem name="Cerveza Artesanal" price="$95" />
      <p className="italic text-left mb-5 leading-relaxed text-stone-600">
        Stout, IPA, Brown Ale, Lagger o Dunkel
      </p>
      <div className="space-y-5">
        <MenuItem name="Clamato con Cerveza" price="$135" />
        <MenuItem name="Clamato Preparado" price="$130" />
        <MenuItem name="Michelada con Cerveza de Importación" price="$140" />
      </div>

      <img
        src="/icon-park-solid_cola.svg"
        className="block mx-auto w-10 h-10 mb-2 mt-3"
      />
      <h3 className="text-center font-serif text-xl font-bold tracking-wide mb-1">
        ◇ SIN ALCOHOL ◇
      </h3>
      <div className="grid grid-cols-2 gap-6 items-start mt-4">
        <div className="left-column">
          <MenuItem name="Sodas" price="$40" />
          <div className="space-y-5">
            <p className="italic text-left mb-5 leading-relaxed text-stone-600">
              Coca Cola, Toronja, Naranja o agua mineral
            </p>
            <MenuItem name="Botella de Agua" price="$30" />
            <MenuItem name="Café" price="$40" />
          </div>
        </div>
        <div className="right-column border-l border-stone-400 pl-6 space-y-3 text-xs">
          <p className="font-bold text-xs mb-2 text-center">
            Limonada y/o Naranjada
          </p>
          <MenuItem name="Vaso Natural" price="$55" />
          <MenuItem name="Vaso Mineral" price="$60" />
          <MenuItem name="1 LT Natural" price="150" />
          <MenuItem name="1 LT Mineral" price="$160" />
          <MenuItem name="2 LT Natural" price="$215" />
          <MenuItem name="2 LT Mineral" price="$225" />
        </div>
      </div>
    </div>
  );
}
