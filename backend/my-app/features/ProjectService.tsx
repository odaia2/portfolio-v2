import { projectRepository } from './ProjectRepository.js';




export const createProjectService = () => {
  const listProjects = async () => {
    try {
      

      } catch (error) {
      console.error('Error loading projects from JSON:', error);
      throw new Error('Failed to load projects');
    }
  };

  const getProjectById = async (id: any) => {
    const project = await projectRepository.getById(id);
    if (!project) throw new Error('Project not found');
    return project;
  };

  const createProject = async (data: any) => {
    return await projectRepository.create(data);
  };

  const deleteProject = async (id: any) => {
    const success = await projectRepository.remove(id);
    if (!success) throw new Error('Failed to delete project');
  };

  return { listProjects, getProjectById, createProject, deleteProject };
};

export const projectService = createProjectService();
