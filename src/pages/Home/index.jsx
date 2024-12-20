import { useEffect, useState } from "react";
import api from '../../services/api'
import './Style.css'
import { Link } from "react-router-dom";

const Home = () => {
    const [filmes, setFilmes]= useState([])
     useEffect( ()=>{
      async function loadMovies() {
        const response= await api.get('movie/now_playing',{
            params:{
                api_key:'d96f9ddcad2c02279eef2aa47680b505',
                language:'pt-BR',
                page:1
            }
        })
  setFilmes(response.data.results.slice(0,10))
    }
        loadMovies()
    },[])
    return ( 
       <div className="container">
        <div className="lista-filmes">
           {filmes.map((filmes)=>{
           return(
            
            <article key={filmes.id}>
            <strong>{filmes.title}</strong>
            <img src={`https://image.tmdb.org/t/p/original/${filmes.poster_path}`} alt={filmes.title}/>
            <Link to={`/filme/${filmes.id}`}>Acessar</Link>
        
        </article>
           )
           })}
           </div>
        </div>
     );
}
 
export default Home;