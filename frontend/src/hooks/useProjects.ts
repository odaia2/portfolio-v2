// src/hooks/useProjects.ts
import { useState, useEffect } from 'react';
import { ofetch } from 'ofetch';
import { Project } from '../types';

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  const fetchProjects = async () => {
    try {
      const response = await ofetch<Project[]>('http://localhost:3000/projects');
      setProjects(response);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const addProject = async (project: Omit<Project, 'id' | 'publishedAt'>) => {
    try {
      const newProject = await ofetch<Project>('http://localhost:3000/projects', {
        method: 'POST',
        body: project,
      });
      setProjects((prevProjects) => [...prevProjects, newProject]);
    } catch (error) {
      console.error("Error adding project:", error);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return { projects, addProject };
};
