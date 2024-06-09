import React from 'react';
import styles from './styles.module.css';

const Contact: React.FC = () => {
  return (
    <div className={styles.contact}>
      <h2>Contato</h2>
      <form>
        <div>
          <label>Nome</label>
          <input type="text" name="name" required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Mensagem</label>
          <textarea name="message" required></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
