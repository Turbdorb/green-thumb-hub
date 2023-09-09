import logo from './MyGarden/assets/img/logo.svg';
import './MyGarden/assets/css/MyGarden.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./MyGarden/NavBar";
import { Banner } from "./MyGarden/Banner";
import { MyPlants } from "./MyGarden/MyPlants";
import { Calender } from "./MyGarden/Calender";
import { Footer } from "./MyGarden/Footer";

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
