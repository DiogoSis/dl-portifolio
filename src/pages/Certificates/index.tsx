import React from 'react';
import styles from './styles.module.css';

const Certificates: React.FC = () => {
  return (
    <div className={styles.certificates}>
      <h2>Certificados</h2>
      <ul>
        <li>Certificado 1</li>
        <li>Certificado 2</li>
        {/* Adicione mais certificados aqui */}
      </ul>
    </div>
  );
};

export default Certificates;
