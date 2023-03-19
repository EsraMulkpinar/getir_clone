import Campaigns from "./components/section/Campaigns";
import HeroSection from "./components/section/HeroSection";
import Categories from "./components/section/Categories";
import Cards from "./components/section/Cards";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import 'rodal/lib/rodal.css';

function App() {
  return (
    <div className="App">
    <Header/>
    <HeroSection/>
    <Categories/>
    <Campaigns/>
    <Cards/>
    <Footer/>
    </div>
  );
}

export default App;
