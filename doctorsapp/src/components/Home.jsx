import { useState, useEffect, useMemo } from "react";
import Doctorcard from "./Doctorcard";
import axios from "axios";

function Home({ newdoctor,deldata,updatedoctor}) {
  let [doctors, setDoctors] = useState([]);
  let [search, setSearch] = useState("");
  let [specialization, setSpecialization] = useState("");
  async function fetchdata() {  
    try{
    let response = await axios.get("https://doctorapibackend.onrender.com/doctors");
    console.log(response.data)
    setDoctors(response.data);
    }catch(err){
      console.log(err); 
    }
  }
useEffect(() => {
    fetchdata();
 }, [newdoctor]);

  // useEffect(() => {
  //   if (newdoctor) {
  //     setDoctors((prev) => [...prev, newdoctor]);
  //   }
  // }, [newdoctor]);

  let filtereddoctors = useMemo(()=>{
    return doctors.filter((val) => {
      console.log('running')
    return (val.name.toLowerCase().includes(search.toLowerCase())) &&
      (specialization == "" || val.specialization == specialization)
  })
},[search,specialization,doctors])

  return (
    <div>
      <div className="filters">
        <input
          type="text"
          className="text-field"
          value={search}
          placeholder="search doctor"
 onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="text-field"
          value={specialization}
          onChange={(e) => setSpecialization(e.target.value)}
        >
          <option value="">Select Specialization</option>
          <option value="Muscles">Muscles</option>
          <option value="Bones">Bones</option>
          <option value="Heart">Heart</option>
        </select>
      </div>

      {filtereddoctors.length > 0 ? (
        <div className="doctorparent">
          {filtereddoctors.map((doctor) => {
            return (
              <Doctorcard
                deldata={deldata}
                updatedoctor={updatedoctor}
                id={doctor.id}
                name={doctor.name}
                gender={doctor.gender}
                specialization={doctor.specialization}
              />
            );
 })}
        </div>
      ) : (
        <h1>No Doctors Found</h1>
      )}
    </div>
  );
}
export default Home;
