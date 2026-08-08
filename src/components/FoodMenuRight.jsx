import { MenuItem } from "./MenuItem";

export function FoodMenuRight() {
  return (
    <div>
      <img
        src="/fluent_bowl-salad-20-filled.svg"
        className="block mx-auto w-10 h-10 mb-2"
      />
      <h3 className="text-center font-serif text-xl font-bold tracking-wide mb-1">
        ◇ ENSALADAS ◇
      </h3>
      <h4 className="text-center leading-relaxed italic mb-4 text-stone-600">
        Variedad de lechugas, queso y frutos secos
      </h4>
      <div className="space-y-5">
        <MenuItem name="Pequeña" price="$160" />
        <MenuItem name="Familiar" price="$390" />
      </div>

      <img
        src="/flowbite_cheese-solid.svg"
        className="block mx-auto w-10 h-10 mb-2 mt-3"
      />
      <h3 className="text-center font-serif text-xl font-bold tracking-wide mb-1">
        ◇ QUESO FUNDIDO ◇
      </h3>
      <div className="space-y-5">
        <MenuItem name="Natural" price="$240" />
        <MenuItem name="Preparado" price="255" />
      </div>
      <p className="italic text-left leading-relaxed text-stone-600">
        Chorizo, rajas, champiñones. Acompañado con tortillas de harina, <br />{" "}
        de maíz o pan
      </p>

      <img src="/meat.svg" className="block mx-auto w-10 h-10 mb-2 mt-3" />
      <h3 className="text-center font-serif text-xl font-bold mb-1">
        ◇ TABLAS DE QUESO Y CARNES ◇
      </h3>
      <div className="space-y-5">
        <MenuItem name="Quesos (chica)" price="$370" />
        <MenuItem name="Quesos (grande)" price="$475" />
        <MenuItem name="Quesos y carnes frías (chica)" price="$495" />
        <MenuItem name="Quesos y carnes frías (grande)" price="$515" />
      </div>
    </div>
  );
}
