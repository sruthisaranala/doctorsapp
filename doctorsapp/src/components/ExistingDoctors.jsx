import React from 'react';
import Doctorcard from './Doctorcard';

function ExistingDoctors() {
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
        name="Veena"
        gender="female"
        specialization="lungs specialist"
      />

      <Doctorcard
        id={6}
        name="Siri"
        gender="female"
        specialization="muscles specialist"
      />

      <Doctorcard
        id={7}
        name="Bhanu"
        gender="female"
        specialization="joints specialist"
      />

      <Doctorcard
        id={8}
        name="Durga"
        gender="female"
        specialization="brain specialist"
      />
    </div>
  );
}

export default ExistingDoctors;