import { useEffect, useState } from "react";
import api from '../../services/api'

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
        <div>
           {filmes.map((filmes)=>{
           return(
            <article key={filmes.id}>
            <strong>{filmes.title}</strong>
        </article>
           )
           })}
        </div>
     );
}
 
export default Home;