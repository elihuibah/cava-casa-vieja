import { useLanguage } from "../context/useLanguage";
import { foodMenuRight } from "../data/foodMenuRight";
import { MenuItem } from "./MenuItem";

export function FoodMenuRight() {
  const { lang } = useLanguage();
  const d = foodMenuRight[lang];

  return (
    <div>
      <img
        src="/fluent_bowl-salad-20-filled.svg"
        className="block mx-auto w-8 h-8"
        alt="Ícono de ensalada"
      />
      <h3 className="text-center font-serif text-xl font-bold tracking-wide">
        {d.ensaladasTitle}
      </h3>
      <h4 className="text-center leading-relaxed italic mb-2 text-stone-600">
        {d.ensaladasNote}
      </h4>
      <div className="space-y-4">
        {d.ensaladasItems.map((item, i) => (
          <MenuItem key={i} name={item.name} price={item.price} />
        ))}
      </div>

      <img
        src="/flowbite_cheese-solid.svg"
        className="block mx-auto w-8 h-8 mt-4"
        alt="Ícono de queso"
      />
      <h3 className="text-center font-serif text-xl font-bold tracking-wide">
        {d.quesoTitle}
      </h3>
      <div className="space-y-4">
        {d.quesoItems.map((item, i) => (
          <MenuItem key={i} name={item.name} price={item.price} />
        ))}
      </div>
      <p className="italic text-left leading-relaxed text-stone-600">
        {d.quesoDescription}
      </p>

      <img
        src="/meat.svg"
        className="block mx-auto w-8 h-8 mt-4"
        alt="Ícono de carne"
      />
      <h3 className="text-center font-serif text-xl font-bold tracking-wide">
        {d.tablasTitle}
      </h3>
      <div className="space-y-4">
        {d.tablasItems.map((item, i) => (
          <MenuItem key={i} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  );
}
