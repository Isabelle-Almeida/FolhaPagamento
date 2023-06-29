import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/cadastrar">Cadastrar</Link>
        </li>
        <li>
          <Link to="/listar">Listar</Link>
        </li>
        <li>
          <Link to="/buscar">Buscar</Link>
        </li>
        
      </ul>
    </nav>
  );
}

export default Nav;
