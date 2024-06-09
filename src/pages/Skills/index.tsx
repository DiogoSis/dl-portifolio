import React from 'react';
import styles from './styles.module.css';

const Skills: React.FC = () => {
  return (
    <div className={styles.skills}>
      <h2>Conhecimentos</h2>
      <ul>
        <li>TypeScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Design Patterns</li>
        {/* Adicione mais habilidades aqui */}
      </ul>
    </div>
  );
};

export default Skills;
