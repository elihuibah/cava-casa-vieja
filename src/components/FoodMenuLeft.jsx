import { MenuItem } from "./MenuItem";

export function FoodMenuLeft() {
  return (
    <div>
      <img
        src="/famicons_pizza-sharp.svg"
        className="block mx-auto w-8 h-8"
        alt="Ícono de pizza"
      />
      <h3 className="text-center font-serif text-xl font-bold tracking-wide">
        ◇ PIZZAS ◇
      </h3>
      <h4 className="text-center font-bold mb-2">Cada una a $255</h4>
      <div className="space-y-4">
        <MenuItem name="Pepperoni" />
        <MenuItem
          name="Ranchera"
          description="Chorizo, tocino, carne deshebrada, cebolla y jalapeño"
        />
        <MenuItem
          name="Suprema"
          description="Pepperoni, chile morrón, aceituna negra, cebolla y champiñones"
        />
        <MenuItem name="Hawaiana" description="Jamón y piña" />
        <MenuItem name="Margarita" description="Tomate y pesto" />
        <MenuItem
          name="Carnes Frías"
          description="Pepperoni, jamón y salchicha"
        />
        <MenuItem
          name="Combinadas"
          description="Pepperoni, jamón y salchicha"
        />
      </div>

      <img
        src="/mdi_bread.svg"
        className="block mx-auto w-8 h-8 mt-4"
        alt="Ícono de pan asado"
      />
      <h3 className="text-center font-serif text-xl font-bold tracking-wide">
        ◇ PAN ASADO ◇
      </h3>
      <p className="text-center font-semibold mb-2">$280</p>
      <p className="text-center leading-relaxed">
        Pan artesanal humectado en aceite de oliva y<br />
        especias. Relleno de queso con trozos de tocinos
      </p>
    </div>
  );
}
