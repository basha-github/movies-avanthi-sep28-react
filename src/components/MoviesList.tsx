//import React from 'react'

import axios from "axios";
import { useEffect,useState } from "react"

interface Movies{
    Title:string;
    Year:number;
    Runtime:string;
    Poster:string;
}



export default function MoviesList() {

     const [movies,setMovies] = useState<Movies[]>();


useEffect(()=>{
    console.log("Movies Are Calling");

    axios.get<Movies[]>("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies").then(
       
        (res)=>{
            console.log("res-->"+res.data);
            setMovies(res.data);
        }

    );
},[]);



  return (
    <div>
<table className="table">
  <thead>
    <tr>
    <th scope="col">Poster</th>
      <th scope="col">Title</th>
      <th scope="col">Year</th>
      <th scope="col">Runtime</th>
      
    </tr>
  </thead>
  <tbody>
    {movies?.map(eachMovie=>(
        <tr>
            <td>
        <img src=
        {eachMovie.Poster} />
        </td>
      <th scope="row">{eachMovie.Title}</th>
      <td>{eachMovie.Year}</td>
      <td>{eachMovie.Runtime}</td>
      
    </tr>
    ))}
    
   
  </tbody>
</table>



    </div>
  )
}



