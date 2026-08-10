import { Header } from "./components/Header";
import { HeroPage } from "./pages/HeroPage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { MenuPage } from "./pages/MenuPage";
import { ReservationsPage } from "./pages/ReservationsPage";
import { LocationPage } from "./pages/LocationPage";

function App() {
  return (
    <>
      <Header />
      <HeroPage />
      <AboutUsPage />
      <MenuPage />
      <ReservationsPage />
      <LocationPage />
    </>
  );
}

export default App;
