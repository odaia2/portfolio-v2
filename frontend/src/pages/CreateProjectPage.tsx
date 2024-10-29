import { useProjects } from '../hooks/useProjects';
import CreateProject from '../components/CreateProject';

export default function CreateProjectPage() {
  const { addProject } = useProjects();

  return (
    <div>
      <h2>Opprett nytt prosjekt</h2>
      <p>Her kan du opprette et nytt prosjekt og legge det til i prosjektporteføljen</p>
      <CreateProject addProject={addProject} />
    </div>
  );
}
