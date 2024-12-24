import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Style.css'

const Favoritos = () => {
    const [movies, setMovies]= useState([])
    useEffect(()=>{
        const saveMovies= localStorage.getItem('@primeFlix')
        setMovies(JSON.parse(saveMovies) || [])
       
    },[])
    return ( 
        <div className="my-movies">
            <h1>Meus Filmes</h1>
            <ul>
                {movies.map((item)=>{
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}> Ver Detalhes </Link>
                                <button>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
     );
}
 
export default Favoritos;