import { Hono } from 'hono';
import { projectService } from './ProjectService.js';

export const ProjectController = () => {
  const app = new Hono();

  app.get('/projects', async (c) => {
    try {
      const projects = await projectService.listProjects();
      return c.json({ success: true, data: projects });
    } catch (error) {
      return c.json({ success: false, }, 500);
    }
  });

  app.get('/projects/:id', async (c) => {
    const id = parseInt(c.req.param('id'), 10);
    try {
      const project = await projectService.getProjectById(id);
      return c.json({ success: true, data: project });
    } catch (error) {
      return c.json({ success: false,}, 404);
    }
  });

  app.post('/projects', async (c) => {
    const data = await c.req.json();
    try {
      const newProject = await projectService.createProject(data);
      return c.json({ success: true, data: newProject }, 201);
    } catch (error) {
      return c.json({ success: false, message: 'Could not create project' }, 400);
    }
  });

  app.delete('/projects/:id', async (c) => {
    const id = parseInt(c.req.param('id'), 10);
    try {
      await projectService.deleteProject(id);
      return c.json({ success: true, message: 'Project deleted successfully' });
    } catch (error) {
      return c.json({ success: false,  }, 400);
    }
  });

  return app;
};

export const projectController = ProjectController();
