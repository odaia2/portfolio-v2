import React, { useState } from 'react';
import { useProjects } from './hooks/useProjects';
import ProjectList from './components/ProjectList';
import CreateProject from './components/CreateProject';
import Header from './components/Header';
import Nav from './components/Nav';
import './Style/Style.css';

export default function App() {
  const { projects, addProject } = useProjects();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Nav />
      <main>
        <ProjectList projects={projects} />
        <CreateProject addProject={addProject} />
      </main>
      <footer>Prosjektportefølje</footer>
    </div>
  );
}
