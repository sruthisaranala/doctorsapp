import React from 'react'
import { useNavigate } from 'react-router-dom'

function Doctorcard({name,gender,specialization,id}) {
  let navigate=useNavigate()
  return (
    <div>
      <div>
        <img width='100'src='https://cdn-icons-png.flaticon.com/512/387/387561.png'alt='Image'/>
      </div>
      <h3>{name}</h3>
      <p>{gender}</p>
      <p>{specialization}</p>
      <button onClick={() =>navigate(`/doctor/${id}`)}>viewdetails</button>
    </div>
  )
}

export default Doctorcard