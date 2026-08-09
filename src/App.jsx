import { Header } from "./components/Header";
import { HeroPage } from "./pages/HeroPage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { MenuPage } from "./pages/MenuPage";
import { ReservationsPage } from "./pages/ReservationsPage";
import { LocationPage } from "./pages/LocationPage";
import { ScrollProgress } from "./components/ScrollProgress";

function App() {
  return (
    <>
      <ScrollProgress />
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
