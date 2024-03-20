function Vehicles({my_automobile}){
    return (
      my_automobile.vehicles.map((vehicle, ind) => (
        <>
        <div id="proj">
          
            <img src={vehicle.imageUrl} width={vehicle.width} height={vehicle.height} class="img_p"></img>

        </div>

        </>
      ))
    )
}
export default Vehicles;