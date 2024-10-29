import { FC } from 'react';
import { Project } from '../types';

type ProjectListProps = {
  projects: Project[];
  onDeleteProject: (id: number) => void; 
};

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const ProjectList: FC<ProjectListProps> = ({ projects, onDeleteProject }) => {
  return (
    <section id="project-list">
      <h2>Prosjektliste</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <article key={index} className="project-card">
            <div className="project-details">
              {/* Tittelen er klikkbar hvis URL finnes */}
              <h3>
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    {project.name}
                  </a>
                ) : (
                  project.name
                )}
              </h3>
              <p>{project.description}</p>
              <p>Status: {project.status}</p>
              <p>Offentlig: {project.public ? "Ja" : "Nei"}</p>
              <p>Publisert: {project.publishedAt ? formatDate(project.publishedAt) : "Ikke publisert"}</p>
              <p>Tags: {project.tags.join(', ')}</p>
              <button onClick={() => onDeleteProject(project.id as number)} className="delete-button">
                Slett prosjekt
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
