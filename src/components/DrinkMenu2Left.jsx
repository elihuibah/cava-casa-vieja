import { useLanguage } from "../context/useLanguage";
import { drinkMenu2Left } from "../data/drinkMenu2Left";
import { MenuItem } from "./MenuItem";

export function DrinkMenu2Left() {
  const { lang } = useLanguage();
  const d = drinkMenu2Left[lang];
  // Beers with a description go in the left column, the rest in the right one.
  const described = d.cervezasItems.filter((item) => item.description);
  const plain = d.cervezasItems.filter((item) => !item.description);

  return (
    <div>
      <img src="/ion_beer.svg" className="block mx-auto w-8 h-8" alt="" />
      <h3 className="text-center font-serif text-xl font-bold tracking-wide">
        {d.cervezasTitle}
      </h3>

      <div className="grid @sm:grid-cols-2 items-start mt-4 -mb-4 text-sm">
        <div className="left-column">
          {described.map((item, i) => (
            <div key={i}>
              <MenuItem
                name={item.name}
                price={item.price}
                priceClassName="@sm:mr-4"
              />
              <p className="italic text-left leading-relaxed mb-4 text-stone-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="right-column @sm:border-l border-stone-400 @sm:pl-4 @sm:h-45 space-y-4 mb-8 @sm:mb-0">
          {plain.map((item, i) => (
            <MenuItem key={i} name={item.name} price={item.price} />
          ))}
        </div>
      </div>

      <img src="/icon-park-solid_cola.svg" className="block mx-auto w-8 h-8" alt="" />
      <h3 className="text-center font-serif text-xl font-bold tracking-wide">
        {d.sinAlcoholTitle}
      </h3>
      {/* Stacked on narrow pages, two columns from @sm (page width). */}
      <div className="grid @sm:grid-cols-2 gap-y-6 items-start mt-4">
        <div className="left-column text-sm">
          <MenuItem
            name={d.sodas.name}
            price={d.sodas.price}
            priceClassName="@sm:mr-4"
          />
          <div className="space-y-3">
            <p className="italic text-left mb-3 leading-relaxed text-stone-600">
              {d.sodas.description}
            </p>
            {d.otros.map((item, i) => (
              <MenuItem
                key={i}
                name={item.name}
                price={item.price}
                priceClassName="@sm:mr-4"
              />
            ))}
          </div>
        </div>
        <div className="right-column @sm:border-l border-stone-400 @sm:pl-6 space-y-3 text-sm">
          <p className="font-bold text-sm mb-2 text-center">
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
