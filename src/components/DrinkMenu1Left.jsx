import { useLanguage } from "../context/useLanguage";
import { drinkMenu1Left } from "../data/drinkMenu1Left";
import { MenuItem } from "./MenuItem";

export function DrinkMenu1Left() {
  const { lang } = useLanguage();
  const d = drinkMenu1Left[lang];

  return (
    <div>
      <img
        src="/fluent-emoji-high-contrast_wine-glass.svg"
        className="block mx-auto w-8 h-8"
        alt="Ícono de copa de vino"
      />
      <h3 className="text-center font-serif text-xl font-bold tracking-wide">
        {d.vinosTitle}
      </h3>

      <div className="space-y-4">
        {d.vinosItems.map((item, i) => (
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
        src="/pinhead_traditional-storage-jars.svg"
        className="block mx-auto w-8 h-8 mt-4"
        alt="Ícono de jarritos"
      />
      <h3 className="text-center font-serif text-xl font-bold tracking-wide">
        {d.jarritosTitle}
      </h3>
      <div className="space-y-4">
        {d.jarritosItems.map((item, i) => (
          <MenuItem key={i} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  );
}
