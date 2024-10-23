import React, { useState } from 'react';

type CreateProjectProps = {
  addProject: (project: { name: string; description: string; status: string }) => void;
};

export default function CreateProject({ addProject }: CreateProjectProps) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('pågående');
  const [submitted, setSubmitted] = useState(false); // For tilbakemelding etter innsending

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addProject({ name: title, description, status });
    setTitle('');
    setDescription('');
    setStatus('pågående');
    setSubmitted(true); // Viser tilbakemelding etter innsending
    setTimeout(() => setSubmitted(false), 3000); // Skjul tilbakemelding etter 3 sekunder
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
          placeholder="Skriv prosjektets tittel..."
          required
        />

        <label htmlFor="description">Beskrivelse:</label>
        <textarea
          id="description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Skriv prosjektbeskrivelse..."
          required
        ></textarea>

        <label htmlFor="status">Status:</label>
        <select id="status" name="status" value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="pågående">Pågående</option>
          <option value="fullført">Fullført</option>
        </select>

        <button type="submit">Opprett prosjekt</button>
      </form>

      {/* Tilbakemelding etter innsending */}
      {submitted && <p className="success-message">Prosjektet ble opprettet!</p>}
    </section>
  );
}
