import React, { useEffect, useState } from 'react'
import requests from '../Request'
import axios from 'axios'

function Main() {
    const [movies, setMovies] = useState([])
    const movie = movies[Math.floor(Math.random()*movies.length)]
   
    useEffect(()=>{
        axios.get(requests.requestTrending).then((response)=>{
            setMovies(response.data.results)
        })
    },[])

    const truncateString=(str,num)=>{
        if (str?.length > num){
            return str.slice(0,num)+'...';
        }else{
            return str;
        }
    }
  return (
    <div className="w-full h-screen text-white relative overflow-hidden">
            <div className="absolute w-full h-full bg-gradient-to-r from-black"></div>
            <img className="w-full h-full object-cover object-center" src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
            <div className="absolute top-[20%] xl:top-[40%] right-[20%] md:left-8 p-5">
                <h1 className="text-3xl xl:text-5xl font-bold my-5 mx-3">{movie?.title}</h1>
                <button className="border border-gray-300 px-9 sm:px-10 py-3 mx-2 bg-white text-black">Play</button>
                <button className="border px-5 py-3 sm:px-10 border-gray-300">Watch</button>
                <p className="text-md font-medium my-5 mx-3">Released : {movie?.release_date}</p>
                <p className="w-full md:max-w-[70%] ml-2 xl:text-xl lg:max-w-[50%] xl:max-w-[35%] line-clamp-2">{truncateString(movie?.overview, 150)}</p>
            </div>
        </div>
  )
}

export default Main
