import { useLanguage } from "../context/useLanguage";
import { drinkMenu1Left } from "../data/drinkMenu1Left";
import { MenuItem } from "./MenuItem";

export function DrinkMenu1Left() {
  const { lang } = useLanguage();
  const d = drinkMenu1Left[lang];
  // Wines with a description go in the left column, the rest in the right one.
  const described = d.vinosItems.filter((item) => item.description);
  const plain = d.vinosItems.filter((item) => !item.description);

  return (
    <div>
      <img
        src={`${import.meta.env.BASE_URL}fluent-emoji-high-contrast_wine-glass.svg`}
        className="block mx-auto w-8 h-8"
        alt=""
      />
      <h3 className="text-center font-serif text-xl font-bold tracking-wide">
        {d.vinosTitle}
      </h3>

      <div className="grid @sm:grid-cols-2 items-start mt-4">
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
        <div className="right-column @sm:border-l border-stone-400 @sm:pl-4 @sm:h-48 space-y-4 mb-4 @sm:mb-0">
          {plain.map((item, i) => (
            <MenuItem key={i} name={item.name} price={item.price} />
          ))}
        </div>
      </div>

      <img
        src={`${import.meta.env.BASE_URL}pinhead_traditional-storage-jars.svg`}
        className="block mx-auto w-8 h-8 mt-4"
        alt=""
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
