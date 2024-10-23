type Project = {
  id: number;
  name: string;
  description: string;
  status: string;
};

type ProjectListProps = {
  projects: Project[];
};

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <section id="project-list">
      <h2>Prosjektliste</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.id} className="project-card">
            {/* Hvis du vil ha et bilde, kan du inkludere et standardbilde */}
            
            <div className="project-details">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p>Status: {project.status}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
