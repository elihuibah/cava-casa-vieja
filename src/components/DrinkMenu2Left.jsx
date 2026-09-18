import { useLanguage } from "../context/useLanguage";
import { drinkMenu2Left } from "../data/drinkMenu2Left";
import { MenuItem } from "./MenuItem";

export function DrinkMenu2Left() {
  const { lang } = useLanguage();
  const d = drinkMenu2Left[lang];

  return (
    <div>
      <img
        src="/ion_beer.svg"
        className="block mx-auto w-8 h-8"
        alt="Ícono de cerveza"
      />
      <h3 className="text-center font-serif text-xl font-bold tracking-wide">
        {d.cervezasTitle}
      </h3>

      <div className="space-y-3">
        {d.cervezasItems.map((item, i) => (
          <div key={i}>
            <MenuItem name={item.name} price={item.price} />
            {item.description && (
              <p className="italic text-sm text-stone-600">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>

      <img
        src="/icon-park-solid_cola.svg"
        className="block mx-auto w-8 h-8"
        alt="Ícono de refresco"
      />
      <h3 className="text-center font-serif text-xl font-bold tracking-wide">
        {d.sinAlcoholTitle}
      </h3>
      <div className="grid grid-cols-2 gap-6 mt-4">
        <div className="space-y-3 pr-2">
          <MenuItem name={d.sodas.name} price={d.sodas.price} />
          <p className="italic text-sm text-stone-600">{d.sodas.description}</p>
          {d.otros.map((item, i) => (
            <MenuItem key={i} name={item.name} price={item.price} />
          ))}
        </div>

        <div className="border-l border-stone-400 pl-6 space-y-3">
          <p className="font-bold text-xs text-center mb-2">
            {d.limonadaTitle}
          </p>
          {d.limonadaItems.map((item, i) => (
            <MenuItem key={i} name={item.name} price={item.price} />
          ))}
        </div>
      </div>
    </div>
  );
}
