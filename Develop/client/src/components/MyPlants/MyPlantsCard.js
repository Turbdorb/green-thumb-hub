export const MyPlantsCard = ({ title, scientific_name, imgUrl }) => {
  return (
    <div size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <h5><em>{scientific_name}</em></h5>
        </div>
      </div>
    </div>
  )
}
