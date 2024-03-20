function Image({my_automobile}){
    return(
      <>
      <div class="col-left">
      <img src={my_automobile.imageUrl} width={my_automobile.width} height={my_automobile.height} class="img_p"></img>
      </div> 
      </>
    )
  }
  export default Image;