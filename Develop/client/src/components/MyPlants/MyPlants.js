import { MyPlantsCard } from "./MyPlantsCard";
import projImg1 from "../MyPlants/project-img1.png";
import colorSharp2 from "../MyPlants/color-sharp2.png";
import TrackVisibility from 'react-on-screen';

export const MyPlants = () => {
  const myplants = [
    {
      title: "Plant Name",
      description: "Plant Description",
      imgUrl: projImg1,
    },
    {
      title: "Plant Name",
      description: "Plant Description",
      imgUrl: projImg1,
    },
    {
      title: "Plant Name",
      description: "Plant Description",
      imgUrl: projImg1,
    },
    {
      title: "Plant Name",
      description: "Plant Description",
      imgUrl: projImg1,
    },
    {
      title: "Plant Name",
      description: "Plant Description",
      imgUrl: projImg1,
    },
    {
      title: "Plant Name ",
      description: "Plant Description",
      imgUrl: projImg1,
    },
  ];

  return (
    <section className="plants" id="plants">
      <div>
        <div>
          <div size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div class="text-center" className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>My Garden</h2>
                <p> dbfgfb </p>
                <div id="plant-tabs" defaultActiveKey="first">
                  <div variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <div class="flex justify-center item-center">
                      <button class="border-2 rounded-md bg-purple-700" eventKey="first">Outside</button>
                      <button class="border-2 rounded-md bg-purple-700" eventKey="second">Inside</button>
                    </div>
                  </div>
                  <div id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <div eventKey="first">
                    
                      <div class="grid grid-rows-2 grid-flow-col gap-4">
                        {
                          myplants.map((myplants, index) => {
                            return (
                              <MyPlantsCard
                                key={index}
                                {...myplants}
                                />
                            )
                          })
                        }
                      </div>
                    </div>
                    <div eventKey="section">
                      <p>shb j sjd</p>
                    </div>
                    <div eventKey="third">
                      <p> inventore de.</p>
                    </div>
                    </div>
                </div>
              </div>}
            </TrackVisibility>
          </div>
        </div>
      </div>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
