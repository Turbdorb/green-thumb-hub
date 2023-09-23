import '../App.css';
import Nav from "../components/Nav";
import { Banner } from "../components/Banner/Banner";
import { MyPlants } from "../components/MyPlants/MyPlants";
import { Reminder } from "../components/Reminder/Reminder";
import { Footer } from "../components/Footer/Footer";
import colorSharp2 from '../images/color-sharp2.png';

function MyGarden() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <div className="" style={{ backgroundImage: `url(${colorSharp2}`, height: '100vh'}}>
      <MyPlants />
      </div>
      <Footer />
    </div>
  );
}

export default MyGarden;
