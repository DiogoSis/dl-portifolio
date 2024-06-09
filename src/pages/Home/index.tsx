import React from 'react';
import styles from './styles.module.css';
import contrucao from '../../assets/pagina-construcao.png'

const Home: React.FC = () => {
  return (
    <div className={styles.home}>
      <img src={contrucao} alt="Diogo" />
      <h2>Bem-vindo ao meu portfólio</h2>
      <p>
        Olá, eu sou Diogo. Sou um desenvolvedor de software com experiência em TypeScript e apaixonado por seguir os princípios de design e padrões de codificação estabelecidos por Robert Martin. Estou sempre em busca de escrever código legível, eficiente e não redundante.
      </p>
    </div>
  );
};

export default Home;
