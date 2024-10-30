import me from '../../images/me.jpg'; 

export default function AboutMe() {
  return (
    <section id="about-me">
      <img
        src={me} 
        alt="Odai Alkhalaf"
        className="profile-image"
      />
      <div className="about-text">
        <h2>Hei, jeg er Odai Alkhalaf</h2>
        <p>Jeg er en utvikler med erfaring i mange programmeringsspråk som JavaScript, Python, C++, og flere andre.</p>
        <p>Med lidenskap for koding og problemløsning, streber jeg etter å skape funksjonelle og brukervennlige applikasjoner.</p>
      </div>
    </section>
  );
}