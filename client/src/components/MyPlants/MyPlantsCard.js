import colorSharp2 from '../../images/color-sharp2.png';
export const MyPlantsCard = ({ common_name, scientific_name, imgURL }) => {
  console.log(imgURL);
  return (
    <div className="flex text-black item-center justify-center border-2 border-green-600 bg-zinc-50/75 p-px m-4 break-words text-sm rounded-b-full h-48">
      <div className="proj-imgbx">
        <div className="proj-txtx">
          <h5 className='text-sm'>{common_name}</h5>
          <h6 className='text-sm'><em>{scientific_name}</em></h6>
        </div>
      </div>
    </div>
  )
}
