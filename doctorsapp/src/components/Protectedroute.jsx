import React from 'react'

function Protectedroute({ islogin, children }) {
    if(islogin){
        return children
    }
  return (
    <h1>Please login</h1>
  )
}

export default Protectedroute