import { ofetch } from 'ofetch';
import { API_BASE_URL } from '../ config/urls';
import { PROJECTS_URL } from '../ config/urls';

export const fetchProjects = async () => {
  return await ofetch(`${API_BASE_URL}/projects`);
};

export const createProject = async (project: any) => {
  return await ofetch(`${API_BASE_URL}/projects`, {
    method: 'POST',
    body: project,
  });
};
