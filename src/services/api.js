import axios from "axios";

//https://api.themoviedb.org/3/movie/now_playing?api_key=d96f9ddcad2c02279eef2aa47680b505&language=pt-BR
const api= axios.create({
    baseURL:'https://api.themoviedb.org/3/'
})

export default api