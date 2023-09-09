import logo from './logo.svg';
import './MyGarden.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { MyPlants } from "./components/MyPlants";
import { Calender } from "./components/Calender";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <MyPlants />
      <Calender />
      <Footer />
    </div>
  );
}

export default App;
