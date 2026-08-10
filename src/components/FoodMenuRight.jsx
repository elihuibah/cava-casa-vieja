import { MenuItem } from "./MenuItem";

export function FoodMenuRight() {
  return (
    <div>
      <img
        src="/fluent_bowl-salad-20-filled.svg"
        className="block mx-auto w-8 h-8"
      />
      <h3 className="text-center font-serif text-xl font-bold tracking-wide">
        ◇ ENSALADAS ◇
      </h3>
      <h4 className="text-center leading-relaxed italic mb-2 text-stone-600">
        Variedad de lechugas, queso y frutos secos
      </h4>
      <div className="space-y-4">
        <MenuItem name="Pequeña" price="$160" />
        <MenuItem name="Familiar" price="$390" />
      </div>

      <img
        src="/flowbite_cheese-solid.svg"
        className="block mx-auto w-8 h-8 mt-4"
      />
      <h3 className="text-center font-serif text-xl font-bold tracking-wide">
        ◇ QUESO FUNDIDO ◇
      </h3>
      <div className="space-y-4">
        <MenuItem name="Natural" price="$240" />
        <MenuItem name="Preparado" price="$255" />
      </div>
      <p className="italic text-left leading-relaxed text-stone-600">
        Chorizo, rajas, champiñones. Con tortillas de harina, de maíz o pan.
      </p>

      <img src="/meat.svg" className="block mx-auto w-8 h-8 mt-4" />
      <h3 className="text-center font-serif text-xl font-bold tracking-wide">
        ◇ TABLAS DE QUESO Y CARNES ◇
      </h3>
      <div className="space-y-4">
        <MenuItem name="Quesos (chica)" price="$370" />
        <MenuItem name="Quesos (grande)" price="$475" />
        <MenuItem name="Quesos y carnes frías (chica)" price="$495" />
        <MenuItem name="Quesos y carnes frías (grande)" price="$515" />
      </div>
    </div>
  );
}
