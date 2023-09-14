import { MyPlantsCard } from "./MyPlantsCard";
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
    <section className="plant font-body" id="plant">
      <div className="xl:flex-3 ">
        <TrackVisibility>
          {({ isVisible }) =>
            <div class="text-center bg-zinc-200 rounded-sm border-2 border-green-500 shadow-lg shadow-black m-2.5 font-body p-2.5" className={isVisible ? "animate__animated animate__fadeIn" : ""}>
              <h2 className="text-center text-zinc-50 bg-black w-full">My Garden</h2>
              <div id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                <div className="flex items-center justify-center h-auto text-center">
                  <div className="grid grid-cols-3 grid-rows-3 gap-4">
                    {plants?.map((plants, index) => {
                        console.log(plants);
                        return (
                          <MyPlantsCard
                            className=''
                            key={index}
                            {...plants}
                          />
                        )})}
                  </div>
                </div>
              </div>
            </div>}
        </TrackVisibility>
      </div>
    </section>
  )
}
