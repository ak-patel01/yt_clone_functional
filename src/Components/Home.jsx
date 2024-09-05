import React, { useContext } from "react";
import { useEffect, useState } from "react";
import Spinner from "./Spinner.jsx";
import Item from "./Item.jsx";
import { YtContext } from "../Context/YtContext.jsx";

export default function Home(){
  
  const { items, loading } = useContext(YtContext);

  return(
    <div className="flex rounded-md bg-black overflow-hidden grid xs:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-1 mt-2">
     {
       loading ? (<Spinner/>) : 
       (
         items.length === 0 ? (<div>No results found</div>) : 
         (
          items.map((item) => { return <Item key={item.id.videoId} item={item}/>})
         )
       )
     }
    </div>
   )
}