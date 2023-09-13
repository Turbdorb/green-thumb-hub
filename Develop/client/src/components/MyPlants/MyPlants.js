import { MyPlantsCard } from "./MyPlantsCard";
import colorSharp2 from "../MyPlants/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import { useQuery } from "@apollo/client";
import { QUERY_USER } from '../../utils/queries';

export const MyPlants = () => {
  let plants;
  const { data } = useQuery(QUERY_USER);

  if (data) {
    plants = data.user.plants;
  }

  return (
    <section className="plant" id="plant">
      <div>
        <div>
          <div size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div class="text-center" className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>My Garden</h2>
                <div id="plant-tabs" defaultActiveKey="first">
                <div variant="pills" className="div-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <div class="item">
                <a href="#" class="block p-2 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none">Outside</a>
                </div>
                <div class="item">
                <a href="#" class="block p-2 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none">Inside</a>
                  </div>
                  </div>
                  <div id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <div eventKey="first">
                    
                        </div>
                      <div className="grid grid-rows-2 grid-flow-col gap-4">
                        {
                          plants?.map((plants, index) => {
                            return (
                              <MyPlantsCard
                                className='z-50'
                                key={index}
                                {...plants}
                                />
                            )
                          })
                        }
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
