import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.css'

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
        <h1>Diogo de Assis Luna (em Contrução)</h1>
        <nav>
            <ul className={styles.navList}>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/projects"}>Projetos</Link></li>
                <li><Link to={"/skills"}>Conhecimentos</Link></li>
                <li><Link to={"/certificates"}>Certificados</Link></li>
                <li><Link to={"/contact"}>Contato</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header