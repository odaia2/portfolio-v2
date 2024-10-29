import React, { useState } from 'react';
import { Project } from '../types';

type CreateProjectProps = {
  addProject: (project: Omit<Project, 'id' | 'publishedAt'>) => void;
};

export default function CreateProject({ addProject }: CreateProjectProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('draft');
  const [isPublic, setIsPublic] = useState(false);
  const [tags, setTags] = useState('');
  const [url, setUrl] = useState('');  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addProject({
      name: title,
      description,
      status,
      public: isPublic,
      tags: tags.split(',').map((tag) => tag.trim()),
      url,  
    });
    setTitle('');
    setDescription('');
    setStatus('draft');
    setIsPublic(false);
    setTags('');
    setUrl('');  
  };

  return (
    <section id="create-project">
      <h2>Opprett nytt prosjekt</h2>
      <form id="project-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Tittel:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label htmlFor="description">Beskrivelse:</label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>

        <label htmlFor="status">Status:</label>
        <select id="status" name="status" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="draft">Utkast</option>
          <option value="published">Publisert</option>
        </select>

        <label htmlFor="public">Offentlig:</label>
        <input
          type="checkbox"
          id="public"
          name="public"
          checked={isPublic}
          onChange={(e) => setIsPublic(e.target.checked)}
        />

        <label htmlFor="tags">Tags:</label>
        <input
          type="text"
          id="tags"
          name="tags"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="Skriv inn tags, separert med komma"
        />

        <label htmlFor="url">URL:</label>
        <input
          type="text"
          id="url"
          name="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Skriv prosjektets URL..."
        />

        <button type="submit">Opprett prosjekt</button>
      </form>
    </section>
  );
}
