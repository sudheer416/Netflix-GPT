import React from 'react'
import { useSelector } from "react-redux";
import VideoGround from './VideoGround';

import VideoTitle from "./VideoTitle"
const MainComponent = () => {
    const movies = useSelector((store) => store.movie?.nowPlayingMovies);
   
    
    if (!movies) return;
  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;


  return (
    <div className="pt-[30%] bg-black p-0   md:pt-0">

<VideoTitle title={original_title} overview={overview} />
<VideoGround id={id}/>

    </div>
  )
}

export default MainComponent