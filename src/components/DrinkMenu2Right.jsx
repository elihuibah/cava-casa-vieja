import { MenuItem } from "./MenuItem";

export function DrinkMenu2Right() {
  return (
    <div>
      <img
        src="/fontisto_cocktail.svg"
        className="block mx-auto w-10 h-10 mb-2"
      />
      <h3 className="text-center font-serif text-2xl font-bold tracking-wide mb-1">
        ◇ COCTELERÍA ◇
      </h3>
      <div className="space-y-5">
        <MenuItem name="Mojito" price="$150" />
        <MenuItem name="Mojito con Mezcal" price="$190" />
        <MenuItem name="Mezcal Preparado" price="$190" />
        <MenuItem name="Piña Colada" price="$155" />
        <MenuItem name="Piña Colada con Licor" price="$175" />
        <MenuItem name="Paloma" price="$150" />
        <MenuItem name="Tom Collins" price="$170" />
        <MenuItem name="Margarita" price="$180" />
        <MenuItem name="Martinni" price="$195" />
        <MenuItem name="Carajillo" price="$170" />
      </div>
    </div>
  );
}
