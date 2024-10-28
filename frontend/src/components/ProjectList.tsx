// src/components/ProjectList.tsx
import { FC } from 'react';
import { Project } from '../types';

type ProjectListProps = {
  projects: Project[];
};

const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const ProjectList: FC<ProjectListProps> = ({ projects }) => {
  return (
    <section id="project-list">
      <h2>Prosjektliste</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <article key={index} className="project-card">
            <div className="project-details">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p>Status: {project.status}</p>
              <p>Offentlig: {project.public ? "Ja" : "Nei"}</p>
              <p>Publisert: {project.publishedAt ? formatDate(project.publishedAt) : "Ikke publisert"}</p>
              <p>Tags: {project.tags.join(', ')}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
