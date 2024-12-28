import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Style.css'
import { toast } from "react-toastify";

const Favoritos = () => {
    const [movies, setMovies]= useState([])
    useEffect(()=>{
        const saveMovies= localStorage.getItem('@primeFlix')
        setMovies(JSON.parse(saveMovies) || [])
       
    },[])

    function deleteMovies(id){
        const newMovies= movies.filter((item)=>{
           return (item.id !== id)
        })
        setMovies(newMovies)
        localStorage.setItem('@primeFlix', JSON.stringify(newMovies))
        toast.success('Filme excluído com sucesso!')
    }
    return ( 
        <div className="my-movies">
            <h1>Meus Filmes</h1>
            {movies.length== 0 && <span>você não possui filmes no momento </span>}
            <ul>
                {movies.map((item)=>{
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div>
                                <Link to={`/filme/${item.id}`}> Ver Detalhes </Link>
                                <button onClick={()=> deleteMovies(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
     );
}
 
export default Favoritos;