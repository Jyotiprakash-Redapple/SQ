import React from 'react';
import './Work.css';
import Work from '../../assets/imgs/work.png';

const Projects = (): JSX.Element => (
  <div className="Projects" id="work">
    <h1 className="page-title">Our latest work</h1>
    <a href="https://github.com/hellojyoti01" target="_blank" rel="noreferrer">
      <img
        src={Work}
        alt="projects"
        style={{
          backgroundColor: 'transparent',
          backgroundBlendMode: 'multiply',
          borderRadius: '20px',
        }}
      />
    </a>
  </div>
);

export default Projects;
