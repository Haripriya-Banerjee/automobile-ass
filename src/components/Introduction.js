function Introduction({my_automobile}){
    return(
      <>
        <div>
          <h2 class="head">{my_automobile.Name}</h2>
          <div class="para">
          <p class="para">Email: {my_automobile.email}</p>
          <p class="para">Tel No: {my_automobile.tel}</p>
          </div>
        </div>
      </>
    )
  }
  export default Introduction;