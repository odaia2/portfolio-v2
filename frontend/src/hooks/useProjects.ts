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
  url?: string;  
};

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  const fetchProjects = async () => {
    try {
      const response = await ofetch<{ success: boolean; data: Project[] }>(`${API_BASE_URL}/projects`);
      if (response.success) {
        setProjects(response.data);
      } else {
        console.error("Failed to fetch projects:", response);
      }
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const addProject = async (project: Omit<Project, 'id' | 'publishedAt'>) => {
    try {
      const response = await ofetch<{ success: boolean; project: Project }>(`${API_BASE_URL}/projects`, {
        method: 'POST',
        body: project,
      });
      if (response.success) {
        setProjects((prev) => [...prev, response.project]);
      } else {
        console.error("Failed to add project:", response);
      }
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  const deleteProject = async (id: number) => {
    try {
      const response = await ofetch<{ success: boolean }>(`${API_BASE_URL}/projects/${id}`, {
        method: 'DELETE',
      });
      if (response.success) {
        setProjects((prev) => prev.filter((project) => project.id !== id));
      } else {
        console.error("Failed to delete project:", response);
      }
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  return { projects, addProject, deleteProject };
};