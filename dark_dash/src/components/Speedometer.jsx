import React from 'react';
import ReactSpeedometer from "react-d3-speedometer";

const Speedometer = () => {
  return (
   
          <>            
        <ReactSpeedometer
            fluidWidth={false}
            responsive={true}
            minValue={0}
            maxValue={100}
            value={86}
            needleColor="#2F323A"
            segments={5}
            startColor="#26A1EB"
            endColor="#26D974"
            ringWidth={15}
            // textColor=""
    
        />
         <p >Tax paid <h1>86%</h1></p>
         
       
         
        </>        
         
  )
}

export default Speedometer