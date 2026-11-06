import { useState } from "react";
import Home from "./Home";
import axios from "axios"
function Addnewdoctor() {
    let [name,setName]=useState('');
    let [age,setAge]=useState('')
    let [gender,setGender]=useState('')
    let [specialization,setSpecialization]=useState('')
    let [salary,setSalary]=useState('')

    let [newdoctor,setNewdoctor]=useState(null)
    async function handlesubmit(event){
        event.preventDefault();
        let doctor={
            id:Date.now(),
            name,
            age,
            gender,
            specialization,
            salary
        };
        await axios.post('https://doctorapibackend.onrender.com/doctors',doctor)
        alert('Doctor added')
        setNewdoctor(doctor);
       console.log(doctor);
    }
    async function deldata(id){
        await axios.delete(`https://doctorapibackend.onrender.com/doctors/${id}`)
        alert('Doctor deleted')
        setNewdoctor(id)
    }
    async function updatedoctor(id){
        let data={
            id,
            name:prompt('Enter name') || 'Sruthi',
            age:19,
            specialization:'Phyisotherapy',
            gender:prompt('Enter gender') || 'female',  
            salary:87456231
        }
        await axios.put(`https://doctorapibackend.onrender.com/doctors/${id}`,data)
    }

  return (
    <div className="adddoctor">
        <h1>Addnewdoctor</h1>
        <form action="" className="formcontainer" onSubmit={handlesubmit}>
            <input onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder='Enter Doctor Name'/>
            <input onChange={(e)=>setAge(e.target.value)} value={age} type="text" placeholder='Enter Age'/>
            <input onChange={(e)=>setSpecialization(e.target.value)} value={specialization} type="text" placeholder='Enter specialization'/>
            <select onChange={(e)=>setGender(e.target.value)} value={gender} name="" id="">
                <option value="" disabled selected>Gender</option>
                <option value="male">Male</option>  
                <option value="female">Female</option>
            </select>
            <input onChange={(e)=>setSalary(e.target.value)} value={salary} type="text" placeholder='Enter Salary'/>
            <button>Add doctor</button>
        </form>
        <Home newdoctor={newdoctor} deldata={deldata} updatedoctor={updatedoctor}/>

    </div>
  )
}
export default Addnewdoctor