import React,{useState,useEffect} from 'react'
import { api_key, imageUrl } from '../../constants/constants'
import './Rowpost.css'
import axios from '../../axios'
import YouTube from 'react-youtube'

function Rowpost(props) {
  const opts = {
    height: '500',
    width: '100%',
    playerVars: {
      autoplay: 0,
    }
  }
  
  const [movie,setmovie]= useState([])
  const[ymovie,ysetmovie]=useState()

  useEffect(() => {
    axios.get(props.url).then((response)=>{
      setmovie(response.data.results)
    })
  }, [])
  const handleclick=(id)=>{
    console.log(id)
   axios.get(`/movie/${id}/videos?api_key=${api_key}&language=en-US`).then((response)=>{
      if(response.data.results.length!==0){
        ysetmovie(response.data.results[0])
      }
      else{
        console.log('empty')
      }
      
   })
  }
  
  return (
    <div className='row'>
      <h2>{props.title}</h2>
        <div className="posters">
          {movie.map((obj)=>{
            return(
              <img onClick={()=>handleclick(obj.id)} className={props.isSmall ? 'smallposter' : 'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="" />    
            )
          })}
            
        </div>
        {ymovie && <YouTube opts={opts} videoId={ymovie.key}/>}
    </div>
  )
}

export default Rowpost
