import { useState } from "react";
import  { ytBtn }  from "../data";
import Btns from "./Btns";

export default function BtnBar(){
  const [ colour, setColour ] = useState(0);
  return(
    <div className="text-white scrollBar mt-16 ml-2" style={{display:'flex',alignItems:'center', height:'56px',gap:'10',width:'90vw',overflowX:'scroll'}}>
      {
        ytBtn.map((ytButton, index) => { return <Btns key={index} ytButton={ytButton} colour={colour} setColour={setColour} index={index} /> })
      }
    </div>
  )
}