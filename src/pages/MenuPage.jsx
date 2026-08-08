import { useRef, useState } from "react";
import { Menu } from "../components/Menu";
import menubackground from "../assets/menu-background.jpg";

export function MenuPage() {
  const bookRef = useRef();
  const [currentPage, setCurrentPage] = useState(0);

  const goToPage = (index) => {
    bookRef.current?.pageFlip()?.flip(index);
  };

  const isFoodMenuActive = currentPage <= 1;
  const isDrinksMenuActive = currentPage >= 2;

  return (
    <section
      className="relative py-24 px-8 bg-cover bg-center"
      style={{ backgroundImage: `url(${menubackground})` }}
    >
      <div className="absolute inset-0 bg-stone-900/70" />
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <h2 className="font-serif text-5xl font-bold text-stone-100 mb-6">
          MENÚ
        </h2>
        <div className="flex items-center justify-center gap-6 mb-10">
          <button
            onClick={() => goToPage(0)}
            className={`font-serif text-xl font-semibold text-stone-50 hover:text-stone-300 transition ${isFoodMenuActive ? "text-stone-50 underline underline-offset-4" : "text-stone-400"}`}
          >
            Comida
          </button>
          <div className="w-px h-6 bg-stone-50/50" />
          <button
            onClick={() => goToPage(2)}
            className={`font-serif text-xl font-semibold text-stone-50 hover:text-stone-300 transition ${isDrinksMenuActive ? "text-stone-50 underline underline-offset-4" : "text-stone-400"}`}
          >
            Bebidas
          </button>
        </div>
        <Menu bookRef={bookRef} onPageChange={setCurrentPage} />
      </div>
    </section>
  );
}
