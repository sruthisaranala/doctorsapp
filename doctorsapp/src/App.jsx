import Addnewdoctor from "./components/Addnewdoctor";
import Doctorcard from "./components/Doctorcard";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import { useState } from "react";
import { useEffect } from "react";
// import "./components/styles.css";

function App() {
  //let c=0;
  let[c,setC]=useState(0)
  let[othercount,setOthercount]=useState(0)
  useEffect(()=>{
    console.log('api call')
  },[othercount])
  return (
    <div>
       {othercount}
      <button onClick={()=>setOthercount(othercount+1)}>othercount</button>
      {c}
      <button onClick={()=>{
        setC(c+1)
      }}>Increment</button>
      <Navbar />
      <Section />
      <div className='doctorcontainer'>
        <Doctorcard name='Sruthi' gender='female' specialization='heart specialist'/>
        <Doctorcard name='Sruthi' gender='female' specialization='heart specialist'/>
        <Doctorcard name='Sruthi' gender='female' specialization='heart specialist'/>
        <Doctorcard name='Sruthi' gender='female' specialization='heart specialist'/>
        <Doctorcard name='Sruthi' gender='female' specialization='heart specialist'/>
        <Doctorcard name='Sruthi' gender='female' specialization='heart specialist'/>
      </div>
      <Addnewdoctor/>
    </div>
  );
}

export default App;
