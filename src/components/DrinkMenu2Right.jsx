import { useLanguage } from "../context/useLanguage";
import { drinkMenu2Right } from "../data/drinkMenu2Right";
import { MenuItem } from "./MenuItem";

export function DrinkMenu2Right() {
  const { lang } = useLanguage();
  const d = drinkMenu2Right[lang];

  return (
    <div>
      <img src="/fontisto_cocktail.svg" className="block mx-auto w-8 h-8" alt="" />
      <h3 className="text-center font-serif text-xl font-bold tracking-wide">
        {d.title}
      </h3>
      <div className="space-y-5">
        {d.items.map((item, i) => (
          <MenuItem key={i} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  );
}
