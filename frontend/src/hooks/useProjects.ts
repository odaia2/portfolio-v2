import { useState, useEffect } from 'react';
import { ofetch } from 'ofetch';
import { API_BASE_URL } from '../ config/urls';

type Project = {
  id?: number;
  name: string;
  description: string;
  status: string;
  public: boolean;
  tags: string[];
  publishedAt: string;
};

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await ofetch<{ data: Project[] }>(`${API_BASE_URL}/projects`);
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  const addProject = async (project: Omit<Project, 'id' | 'publishedAt'>) => {
    try {
      const response = await ofetch<{ project: Project }>(`${API_BASE_URL}/projects`, {
        method: 'POST',
        body: project,
      });
      setProjects((prev) => [...prev, response.project]);
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  const deleteProject = async (id: number) => {
    try {
      await ofetch(`${API_BASE_URL}/projects/${id}`, { method: 'DELETE' });
      setProjects((prev) => prev.filter((project) => project.id !== id));
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  return { projects, addProject, deleteProject };
};
