import { Route, Routes } from "react-router-dom";
import Addnewdoctor from "./components/Addnewdoctor";
import Doctorcard from "./components/Doctorcard";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import { useState } from "react";
import { useEffect } from "react";
import Doctordetails from "./components/Doctordetails";
import Weather from "./components/Weather";
import ExistingDoctors from "./components/ExistingDoctors";
import Protectedroute from "./components/Protectedroute"; 
import useCounter from "./components/useCounter";
// import "./components/styles.css";

function App() {
  let [islogin,setIslogin]=useState(false)
  let {count,increment,decrement}=useCounter()
//   //let c=0;
//   let[c,setC]=useState(0)
//   let[othercount,setOthercount]=useState(0)
//   useEffect(()=>{
//     console.log('api call')
//   },[othercount])
  return (
    <div>
      {count}
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={()=>setIslogin(true)}>Click to Login</button>
       {/* {othercount}
      <button onClick={()=>setOthercount(othercount+1)}>othercount</button>
      {c}
      <button onClick={()=>{
        setC(c+1)
      }}>Increment</button> */}
      <Navbar />
      <Routes>
        <Route path='/' element={<Section/>}/>
        <Route path='/adddoctor' element={<Protectedroute islogin={islogin}> <Addnewdoctor/> </Protectedroute>}/>
        <Route path='/doctor/:id' element={<Doctordetails/>}/>
        <Route path='/weather' element={<Weather/>}/>
        <Route path="/existingdoctors" element={<ExistingDoctors />} />
      </Routes>
    </div>
  );
}

export default App;
