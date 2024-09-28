//import React from 'react'

import axios from "axios";
import { FormEvent, useState } from "react";

export default function NewMovie() {


    const [title,setTitle] = useState('');
    const [runtime,setRuntime] = useState('');
    const [year,setYear] = useState('');
    const [poster,setPoster] = useState('');

const saveMovie = (r:FormEvent)=>{
r.preventDefault();
console.log("title--->"+title);
console.log("runtime--->"+runtime);
console.log("year--->"+year);
console.log("poster--->"+poster);

const movieData = {
    title,
    runtime,
    year,
    poster
};

axios.post("http://localhost:1234/avanthi/movie",
    movieData   
).then(res=>console.log(res.data));
}


  return (
    <div>
<form onSubmit={saveMovie} >
  <div className="mb-3">
    <label  className="form-label">Title</label>
    <input type="text" 
    onChange={e=>setTitle(e.target.value)}
    className="form-control"
     id="exampleInputEmail1"
      aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label  className="form-label">Runtime</label>
    <input
     onChange={e=>setRuntime(e.target.value)}
     type="text" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label  className="form-label">Year</label>
    <input 
     onChange={e=>setYear(e.target.value)}
    type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
  </div>
  <div className="mb-3">
    <label  className="form-label">Poster</label>
    <input 
     onChange={e=>setPoster(e.target.value)}
   
    type="text" className="form-control" id="exampleInputPassword1" />
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>



    </div>
  )
}
