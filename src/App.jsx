import { Header } from "./components/Header";
import { HeroPage } from "./pages/HeroPage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { MenuPage } from "./pages/MenuPage";
import { ReservationsPage } from "./pages/ReservationsPage";
import { LocationPage } from "./pages/LocationPage";
import { Footer } from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";
import locationbackground from "./assets/location-background.jpg";

function App() {
  return (
    <>
      <LanguageProvider>
        <Header />
        <main id="contenido">
          <HeroPage />
          <AboutUsPage />
          <MenuPage />
          <ReservationsPage />
          {/* Location and footer share one background so the page closes
              as a single block. */}
          <div
            className="relative bg-cover bg-center"
            style={{ backgroundImage: `url(${locationbackground})` }}
          >
            <div className="absolute inset-0 bg-olive-600/70" />
            <LocationPage />
            <Footer />
          </div>
        </main>
      </LanguageProvider>
    </>
  );
}

export default App;
