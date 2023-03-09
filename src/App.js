import Campaigns from "./components/section/Campaigns";
import HeroSection from "./components/section/HeroSection";
import Categories from "./components/section/Categories";
import Favorites from "./components/section/Favorites";
import MobileApp from "./components/section/MobileApp";
import Cards from "./components/section/Cards";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";


function App() {
  return (
    <div className="App">
    <Header/>
    <HeroSection/>
    <Categories/>
    <Campaigns/>
    <Favorites/>
    <MobileApp/>
    <Cards/>
    <Footer/>
    </div>
  );
}

export default App;
