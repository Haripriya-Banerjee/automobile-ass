import Introduction from "./Introduction";
import Image from "./Image";
const About=({my_automobile})=>{
    return(
      <div>
        
        <Introduction my_automobile={my_automobile}/>
        <Image my_automobile={my_automobile}/>
      </div>
    );
  };
  export default About;