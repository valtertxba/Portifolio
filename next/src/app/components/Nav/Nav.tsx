import Link from "next/link";
import "./Nav.css";

export default function Nav() {
  return (
<nav className="navegacao">
      <ul className="menu">
        <li>
          <a href="#inicio" className="menu-link">Início</a>
        </li>
        <li>
          <a href="#sobre" className="menu-link">Sobre</a>
        </li>
        <li>
          <a href="#projetos" className="menu-link">Projetos</a>
        </li>
        <li>
          <a href="#contatos" className="menu-link">Contato</a>
        </li>
      </ul>
    </nav>
  );
}