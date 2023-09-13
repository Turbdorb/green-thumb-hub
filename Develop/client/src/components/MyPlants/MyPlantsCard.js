export const MyPlantsCard = ({ common_name, scientific_name, imgURL }) => {
  console.log(imgURL);
  return (
    <div size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgURL} alt="Plant" />
        <div className="proj-txtx">
          <h4>{common_name}</h4>
          <h5><em>{scientific_name}</em></h5>
        </div>
      </div>
    </div>
  )
}
