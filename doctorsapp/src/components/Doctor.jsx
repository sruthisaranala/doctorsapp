import React from 'react';
import Doctorcard from './Doctorcard';

function Doctor() {
  return (
    <div className="doctorcontainer">
      <Doctorcard
        id={4}
        name="Sruthi"
        gender="female"
        specialization="heart specialist"
      />

      <Doctorcard
        id={5}
        name="Sruthi"
        gender="female"
        specialization="heart specialist"
      />

      <Doctorcard
        id={6}
        name="Sruthi"
        gender="female"
        specialization="heart specialist"
      />

      <Doctorcard
        id={7}
        name="Sruthi"
        gender="female"
        specialization="heart specialist"
      />

      <Doctorcard
        id={8}
        name="Sruthi"
        gender="female"
        specialization="heart specialist"
      />

      <Doctorcard
        id={9}
        name="Sruthi"
        gender="female"
        specialization="heart specialist"
      />
    </div>
  );
}

export default Doctor;