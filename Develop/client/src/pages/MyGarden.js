import logo from './';
import './';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/MyGarden/NavBar";
import { Banner } from "./components/MyGarden/Banner";
import { MyPlants } from "./components/MyGarden/MyPlants";
import { Calender } from "./components/MyGarden/Calender";
import { Footer } from "./components/MyGarden/Footer";

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
