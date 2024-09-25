import { useState } from 'react';
import ProjectList from './components/ProjectList';
import CreateProject from './components/CreateProject';
import Header from './components/Header';
import Nav from './components/Nav';
import './Style/Style.css'

type Project = {
  id: number;
  name: string;
  description: string;
  status: string;
};

const initialProjects = [
  { id: 1, name: "Prosjekt 1", description: "Beskrivelse av prosjekt 1", status: "Pågående" },
  { id: 2, name: "Prosjekt 2", description: "Beskrivelse av prosjekt 2", status: "Fullført" }
];

export default function App() {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  
  const [darkMode, setDarkMode] = useState(false);
  const darkModeButton = document.getElementById('dark-mode')

  console.log(darkModeButton)
  
  function toggleDarkMode(){
    document.body.classList.toggle('dark-mode')
  }

  
  const addProject = (project: Omit<Project, 'id'>) => {
    const newProject = { ...project, id: Date.now() };
    setProjects((prevProjects) => [...prevProjects, newProject]);
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
