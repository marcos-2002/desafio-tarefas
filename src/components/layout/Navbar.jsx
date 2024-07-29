import { Link } from "react-router-dom";
import styles from './Navbar.module.css'

function Navbar(){
    return (
        <nav>
            <Link to='/'>Home</Link>
            <Link to='create'>Criar tarefa</Link>
        </nav>
    )
}

export default Navbar