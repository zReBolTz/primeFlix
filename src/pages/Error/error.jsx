import { Link } from 'react-router-dom';
import './Style.css'

const Error = () => {
    return ( 
        <div className='container'>
            <h1>404 </h1>
            <h3>OPS! NÃO ENCONTRAMOS ESSA PÁGINA </h3>
            <Link to='/'>VOLTAR AO ÍNICIO</Link>
        </div>
     );
}
 
export default Error;