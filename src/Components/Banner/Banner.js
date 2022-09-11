import React,{useEffect} from 'react'
import './Banner.css'
import axios from '../../axios'
import {api_key,imageUrl} from '../../constants/constants'
import { useState } from 'react'
function Banner() {
  const [movie,setmovie]= useState()
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${api_key}&language=en-US`).then((response)=>{
      setmovie(response.data.results[0])
    })
  }, [])
  return (
    <div style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path : ''})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title:''}</h1>
            <div className='bannerbuttons'>
                <button className='button'>Play</button>  
                <button className='button'>My List</button>       
             </div>
            <h1 className='descrpition'>{movie ? movie.overview : '' }</h1>
        
        </div>
        <div className="fade_bottom">
            
        </div>
    </div>
  )
}

export default Banner