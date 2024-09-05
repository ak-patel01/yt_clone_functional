import React from "react";
import { useEffect, useState } from "react";
import { url } from "../data.js";
import Spinner from "./Spinner.jsx";
import Card from "./Card.jsx";

// const API_KEY = process.env.REACT_APP_API_KEY;
// const API_HOST = process.env.REACT_APP_API_HOST;
// const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT;

export default function YouTube(){

  // const [loading, setLoading] = useState(false);
  // const [movies, setMovies] = useState([]);

  // const fetchData = async () => {
  //   setLoading(true)
  //   try {
  //     const res = await fetch(url,
  //       {
  //         method: "GET",
  //         headers: {
  //           "x-apihub-key": "qGbgvdm3pGUmsNWwAzwYcEqZEaE33zdp4Of9l9z5gyg4bAa9hk",
  //           "x-apihub-host": "Movies-Verse.allthingsdev.co",
  //           "x-apihub-endpoint": "4f700f4a-4bd2-4604-8d5b-7b5e4c976c65",
  //         }
  //       }
  //     );
  //     const data = await res.json();
  //     console.log(data);
  //     setMovies(data.movies);
  //   } catch (error) {
  //     console.log(error);
  //     console.log("there is error");
  //   }
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return(
   <div className="flex grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
     {
      // loading ? (<Spinner/>) : 
      // (
      //   movies.map((movie, index) => (<Card key={index} movie={movie}/>))
      // )
    } 
   </div>
  )
}