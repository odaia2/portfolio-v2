// src/index.ts
import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import { cors } from 'hono/cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const app = new Hono();

// Aktiver CORS for å tillate forespørsler fra frontend
app.use('/*', cors());

// Fix for __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Rute for å hente prosjekter fra JSON-filen
app.get('/projects', async (c) => {
  try {
    const filePath = path.join(__dirname, '../data/projects.json');
    const fileData = fs.readFileSync(filePath, 'utf-8');
    const projects = JSON.parse(fileData);

    return c.json(projects);
  } catch (error) {
    console.error('Error reading projects file:', error);
    return c.json({ success: false, message: 'Could not load projects' }, 500);
  }
});

// Rute for å opprette et nytt prosjekt
app.post('/projects', async (c) => {
  try {
    const newProject = await c.req.json();
    const filePath = path.join(__dirname, '../data/projects.json');
    const fileData = fs.readFileSync(filePath, 'utf-8');
    const projects = JSON.parse(fileData);

    // Legg til det nye prosjektet og skriv tilbake til filen
    newProject.id = projects.length ? projects[projects.length - 1].id + 1 : 1;
    projects.push(newProject);
    fs.writeFileSync(filePath, JSON.stringify(projects, null, 2));

    return c.json({ success: true, project: newProject }, 201);
  } catch (error) {
    console.error('Error oppretting prosjekt:', error);
    return c.json({ success: false, message: 'Kunne ikke opprette prosjekt' }, 500);
  }
});

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
