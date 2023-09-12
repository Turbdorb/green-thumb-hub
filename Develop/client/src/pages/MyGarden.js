import logo from '../images/logo.svg';
import '../MyGarden.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "../components/NavBar/NavBar";
import { Banner } from "../components/Banner/Banner";
import { MyPlants } from "../components/MyPlants/MyPlants";
//*import { Calender } from "../pages/Calender";
import { Footer } from "../components/footer.js/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <MyPlants />
      <Footer />
    </div>
  );
}

export default App;
