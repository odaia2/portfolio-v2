import { useProjects } from '../hooks/useProjects';
import ProjectList from '../components/ProjectList';

export default function ProjectListPage() {
  const { projects, deleteProject } = useProjects();

  return (
    <div>
      <h2>Prosjektliste</h2>
      <ProjectList projects={projects} onDeleteProject={deleteProject} />
    </div>
  );
}
