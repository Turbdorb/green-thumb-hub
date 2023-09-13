import Nav from "../components/Nav";
import { Banner } from "../components/Banner/Banner";
import { MyPlants } from "../components/MyPlants/MyPlants";
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
