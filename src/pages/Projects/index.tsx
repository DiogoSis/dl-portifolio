import React from 'react';
import styles from './styles.module.css';

const projects = [
  {
    title: 'Projeto 1',
    description: 'Descrição do projeto 1.',
    link: 'https://github.com/seu-usuario/projeto1',
    image: 'link_da_imagem_do_projeto1'
  },
  {
    title: 'Projeto 2',
    description: 'Descrição do projeto 2.',
    link: 'https://github.com/seu-usuario/projeto2',
    image: 'link_da_imagem_do_projeto2'
  },
  // Adicione mais projetos aqui
];

const Projects: React.FC = () => {
  return (
    <div className={styles.projects}>
      <h2>Projetos</h2>
      <div className={styles.projectCards}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <img src={project.image} alt={project.title} className={styles.projectImage} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Ver Projeto</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
