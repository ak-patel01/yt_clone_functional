import { useContext, useState } from "react"
import { YtContext } from "../Context/YtContext"


export default function Btns({ index, ytButton, colour, setColour }){
  const { btnsHandler } = useContext(YtContext);
  return(
    <div className={index == colour ? 'ytBtn ytColor2' : 'ytBtn ytColor1'}>
       <button onClick={() => { btnsHandler(ytButton); setColour(index) }}>{ytButton}</button>
    </div>
  )
}