import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import './style.css'




const Filme = () => {
    const {id}= useParams()
    const [movie, setMovie]= useState({})
    const [loading, setLoading]=useState(true)
    const navigation= useNavigate()
    useEffect(()=>{
      async function loadMovie(){
        await api.get(`/movie/${id}`,{
            params:{
                api_key:'d96f9ddcad2c02279eef2aa47680b505',
                language:'pt-BR',
            }
        }).then((response)=> setMovie(response.data))
        .catch(()=> navigation ('/', {replace: true}))
        setLoading(false)
       }
       loadMovie()
    },[navigation, id])

    
    function saveMovie(){
        const minhaLista= localStorage.getItem('@primeFlix') 
       let saveMovies= JSON.parse(minhaLista) || []
       const hasFilme= saveMovies.some((item)=>item.id===movie.id)
       if(hasFilme){
        console.log('ja esta salvo')
        return
       }
       saveMovies.push(movie)
       localStorage.setItem('@primeFlix', JSON.stringify(saveMovies))
    }

    if(loading){
        return(
            <div>
                <h2>Carregando Filme...</h2>
            </div>
        )
    }
     
    return ( 
        <div className="movie-info">
           <h1>{movie.title}</h1>
           <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}  className='' alt={movie.title}/>
           <h3>Sinopse</h3>
          <span>{movie.overview}</span>
          <strong>Avaliação: {movie.vote_average}</strong>
          <div className="area-buttons">
            <button onClick={saveMovie}>Salvar</button>
            <button><a rel='external' target="_blank" href={`https://www.youtube.com/results?search_query=${movie.title} trailer`}>Trailer</a></button>
          </div>
        </div>
     );
}
 
export default Filme;