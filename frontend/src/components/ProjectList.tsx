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
      <ul id="projects">
        {projects.map((project) => (
          <li key={project.id}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <p>Status: {project.status}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
