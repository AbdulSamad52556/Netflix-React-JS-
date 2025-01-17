import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Movie from './Movie';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'

function Row({title,fetchURL, rowID}) {
    const [movies,setMovies] = useState([]);

    useEffect(()=>{
        axios.get(fetchURL).then((response)=>{
            setMovies(response.data.results);
        });
    },[fetchURL])
    
    const slideLeft = () =>{
        var slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft - 500
    }
    const slideRight = () =>{
        var slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft + 500
    }

  return (
    <>
    <h2 className='font-bold text-white p-4'>{title}</h2>
    <div className='relative flex items-center group'>
        <MdChevronLeft onClick={slideLeft} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 left-0 hidden group-hover:block' size={40} />
        <div id={'slider' + rowID} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
            {movies.map((items,id)=>(
                <Movie key={id} items={items}/>
            ))}
        </div>
        <MdChevronRight onClick={slideRight} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 right-0 hidden group-hover:block' size={40} />
    </div>

    </>
  )
}

export default Row
