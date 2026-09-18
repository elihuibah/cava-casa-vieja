import { useLanguage } from "../context/useLanguage";
import { drinkMenu1Right } from "../data/drinkMenu1Right";
import { MenuItem } from "./MenuItem";

export function DrinkMenu1Right() {
  const { lang } = useLanguage();
  const d = drinkMenu1Right[lang];

  return (
    <div>
      <img
        src="/game-icons_wine-bottle.svg"
        className="block mx-auto w-8 h-8"
        alt="Ícono de botella de vino"
      />
      <h3 className="text-center font-serif text-xl font-bold tracking-wide">
        {d.donEnriqueTitle}
      </h3>
      <div className="space-y-4 mt-4">
        {d.donEnriqueItems.map((item, i) => (
          <MenuItem key={i} name={item.name} price={item.price} />
        ))}
      </div>
      <img
        src="/solar_wineglass-bold.svg"
        className="block mx-auto w-8 h-8 mt-4"
        alt="Ícono de copa de sangría"
      />
      <h3 className="text-center font-serif text-xl font-bold tracking-wide">
        {d.sangriasTitle}
      </h3>
      <div className="space-y-4">
        {d.sangriasItems.map((item, i) => (
          <MenuItem key={i} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  );
}
