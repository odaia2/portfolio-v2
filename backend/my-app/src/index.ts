import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { cors } from 'hono/cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const app = new Hono();
app.use('/*', cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, './data/projects.json');

// GET: Hent alle prosjekter
app.get('/projects', async (c) => {
  try {
    const fileData = fs.readFileSync(filePath, 'utf-8');
    const projects = JSON.parse(fileData);
    return c.json({ success: true, data: projects });
  } catch (error) {
    console.error('Error reading projects file:', error);
    return c.json({ success: false, message: 'Could not load projects' }, 500);
  }
});

// POST: Opprett nytt prosjekt
app.post('/projects', async (c) => {
  try {
    const newProject = await c.req.json();
    const fileData = fs.readFileSync(filePath, 'utf-8');
    const projects = JSON.parse(fileData);
    newProject.id = projects.length ? projects[projects.length - 1].id + 1 : 1;
    newProject.publishedAt = new Date().toISOString();
    projects.push(newProject);
    fs.writeFileSync(filePath, JSON.stringify(projects, null, 2));
    return c.json({ success: true, project: newProject }, 201);
  } catch (error) {
    console.error('Error creating project:', error);
    return c.json({ success: false, message: 'Could not create project' }, 500);
  }
});

// DELETE: Slett et prosjekt
app.delete('/projects/:id', async (c) => {
  try {
    const projectId = parseInt(c.req.param('id'), 10);
    const fileData = fs.readFileSync(filePath, 'utf-8');
    let projects = JSON.parse(fileData);
    projects = projects.filter((p: any) => p.id !== projectId);
    fs.writeFileSync(filePath, JSON.stringify(projects, null, 2));
    return c.json({ success: true });
  } catch (error) {
    console.error('Error deleting project:', error);
    return c.json({ success: false, message: 'Could not delete project' }, 500);
  }
});

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});