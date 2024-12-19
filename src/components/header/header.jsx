import { Link } from "react-router-dom";
import './Style.css'

const Header = () => {
    return ( 
    <div className="header">
        <Link to='/' className="logo">Prime Flix</Link>
        <Link to='favoritos'><button className="favoritos">Meus Filmes</button></Link>
    </div>    
);
}
 
export default Header;