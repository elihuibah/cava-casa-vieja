import { Header } from "./components/Header";
import { HeroPage } from "./pages/HeroPage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { MenuPage } from "./pages/MenuPage";
import { ReservationsPage } from "./pages/ReservationsPage";
import { LocationPage } from "./pages/LocationPage";
import { Footer } from "./components/Footer";
import { LanguageProvider } from "../context/LanguageContext";

function App() {
  return (
    <>
      <LanguageProvider>
        <Header />
        <main>
          <HeroPage />
          <AboutUsPage />
          <MenuPage />
          <ReservationsPage />
          <LocationPage />
          <Footer />
        </main>
      </LanguageProvider>
    </>
  );
}

export default App;
