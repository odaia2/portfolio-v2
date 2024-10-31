import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { projectController } from '../features/ProjectController.js';

const app = new Hono();

app.route('/api', projectController);

const port = 3000;
console.log(`Server is running on port ${port}`);
serve({ fetch: app.fetch, port });
