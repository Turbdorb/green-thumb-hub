import logo from "../images/logo.svg";
import "../MyGarden.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "../components/Nav";
import { Banner } from "../components/Banner/Banner";
import { MyPlants } from "../components/MyPlants/MyPlants";
//*import { Calender } from "../pages/Calender";
import { Footer } from "../components/Footer/Footer";

function MyGarden() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <MyPlants />
      <Footer />
    </div>
  );
}

export default MyGarden;
