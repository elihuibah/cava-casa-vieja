import { useLanguage } from "../context/useLanguage";
import { foodMenuLeft } from "../data/foodMenuLeft";
import { MenuItem } from "./MenuItem";

export function FoodMenuLeft() {
  const { lang } = useLanguage();
  const d = foodMenuLeft[lang];

  return (
    <div>
      <img
        src="/famicons_pizza-sharp.svg"
        className="block mx-auto w-8 h-8"
        alt="Ícono de pizza"
      />
      <h3 className="text-center font-serif text-xl font-bold tracking-wide">
        {d.pizzasTitle}
      </h3>
      <h4 className="text-center font-bold mb-2">Cada una a $255</h4>
      <div className="space-y-4">
        {d.pizzasItems.map((item, i) => (
          <MenuItem key={i} name={item.name} description={item.description} />
        ))}
      </div>

      <img
        src="/mdi_bread.svg"
        className="block mx-auto w-8 h-8 mt-4"
        alt="Ícono de pan asado"
      />
      <h3 className="text-center font-serif text-xl font-bold tracking-wide">
        {d.panTitle}
      </h3>
      <p className="text-center font-semibold mb-2">{d.panPrice}</p>
      <p className="text-center leading-relaxed">{d.panDescription}</p>
    </div>
  );
}
