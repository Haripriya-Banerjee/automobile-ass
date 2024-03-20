import logo from './logo.svg';
import './App.css';
import Contact from './components/Contact';
import Vehicles from './components/Vehicles';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import { BrowserRouter , Routes , Route } from "react-router-dom";
import { useState } from 'react';
const my_automobile={
  "Name":"Auto Mobile",
  "email":"haripriya891873@gmail.com",
  "tel":"8918737785",
  home:
    {
      "description":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    },

  socialmedia:
    {
      "LinkedInUrl":"https://www.linkedin.com/in/haripriya-banerjee-5a95771a1/",
      "Location":"https://www.google.com/maps/place/Burdwan+Railway+Station+Rd,+Railway+Loco+Colony,+Bardhaman,+West+Bengal+713101/@23.250524,87.871269,17z/data=!3m1!4b1!4m6!3m5!1s0x39f849ea3f00e141:0xafe1a1908a8c3bc1!8m2!3d23.250524!4d87.871269!16s%2Fg%2F11gflsm4wm?entry=ttu",

    },

    vehicles: [
      {
        name: "Toyota",
        imageUrl: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Toyota/Fortuner/10903/1695443447797/front-left-side-47.jpg?tr=w-420",
        width:"20%",
        height:"20%",
      },
      {
        name: "Sedan",
        imageUrl: "https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/19812/fortuner-exterior-right-front-three-quarter.jpeg?q=80",
        width:"20%",
        height:"20%",
      },
    ],
  imageUrl:"https://content.jdmagicbox.com/comp/def_content/car_repair_and_services_hyundai_authorised/default-car-repair-and-services-hyundai-authorised-4.jpg",
  width:"20%",
  height:"20%",
}

function App(){
  const [count , setCount] = useState(0);
  function alertMessage(){
    setCount(count+2);
  }
  return(
    <>
    <BrowserRouter>
    <Navbar></Navbar>
    <MyButton class="btn" count = {count} onClick={alertMessage}/>
    {/* <Footer></Footer> */}
    <Routes>

      <Route path="/" element={<About my_automobile={my_automobile}/>}/>
      <Route path="/home" element={<Home my_automobile={my_automobile}/>}/>
      <Route path="/vehicles" element={<Vehicles my_automobile={my_automobile}/>}/>
      <Route path="/contact" element={<Contact my_automobile={my_automobile}/>}/>
    </Routes>
    <MyButton class="btn" count = {count} onClick={alertMessage}/>
    </BrowserRouter>

    {/* <h1>Practice more....</h1> */}
    </>
  )
}
function MyButton({count , onClick}){
  return (
    <button onClick={onClick}> {count}</button>
  )
}
export default App;
