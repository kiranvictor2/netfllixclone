import React from 'react'
import './Banner.css'

function Banner() {
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>Movie name</h1>
            <div className='bannerbuttons'>
                <button className='button'>Play</button>  
                <button className='button'>My List</button>       
             </div>
            <h1 className='descrpition'>Th emovie cominh fro the website</h1>
        
        </div>
        <div className="fade_bottom">
            
        </div>
    </div>
  )
}

export default Banner