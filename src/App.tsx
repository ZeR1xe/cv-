import './App.css'
import { useEffect, useState } from 'react';

function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    // Remplacez 'antagoniste-cv' par un identifiant unique pour votre site
    fetch('https://api.countapi.xyz/hit/antagoniste-cv/visits')
      .then(res => res.json())
      .then(data => setCount(data.value));
    // Pour un vrai temps réel, il faudrait du WebSocket, mais CountAPI suffit pour du quasi-instantané
    const interval = setInterval(() => {
      fetch('https://api.countapi.xyz/get/antagoniste-cv/visits')
        .then(res => res.json())
        .then(data => setCount(data.value));
    }, 5000); // rafraîchit toutes les 5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="visitor-counter">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4f8cff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: 6}}>
        <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/>
        <circle cx="12" cy="12" r="3.5" fill="#4f8cff" stroke="#fff" strokeWidth="1.5"/>
      </svg>
      <span>{count !== null ? count : '...'}</span>
    </div>
  );
}

function App() {
  return (
    <>
      <div className="background-animated">
        {/* Particules animées */}
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: `${18 + Math.random() * 32}px`,
              height: `${18 + Math.random() * 32}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle at 30% 30%, #4f8cff99 0%, #23252600 80%)`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
      {/* Compteur de visiteurs flottant en bas à droite */}
      <VisitorCounter />
      <div className="main-container">
        {/* Hero Section */}
        <section className="hero">
          <h1 className="hero-title">Antagoniste - Développeur Polyvalent</h1>
          <p className="hero-subtitle">Je réalise vos projets web & logiciels dans tous les langages</p>
        </section>

        {/* Présentation Section */}
        <section className="presentation">
          <h2>À propos de moi</h2>
          <p>
            Passionné par le développement depuis de nombreuses années, je m’appelle Antagoniste et je propose mes services pour donner vie à vos projets numériques. Que ce soit pour un site web, une application, un bot Discord ou un outil sur-mesure, je maîtrise de nombreux langages et technologies pour répondre à tous vos besoins. Mon objectif : vous offrir des solutions modernes, performantes et adaptées à vos attentes.
          </p>
        </section>

        {/* Services Section */}
        <section className="services">
          <h2>Mes Services</h2>
          <div className="services-list">
            <div className="service-card">
              <h3>Développement Web</h3>
              <p>Sites vitrines, e-commerce, applications web modernes (React, Vue, Angular...)</p>
            </div>
            <div className="service-card">
              <h3>Logiciels & Scripts</h3>
              <p>Automatisation, outils métiers, scripts sur-mesure (Python, Node.js, C#, etc.)</p>
            </div>
            <div className="service-card">
              <h3>Mobile & API</h3>
              <p>Applications mobiles (React Native, Flutter) et APIs performantes</p>
            </div>
            <div className="service-card">
              <h3>Bots Discord sur-mesure</h3>
              <p>Bots Discord de tout genre, personnalisés selon vos besoins (modération, jeux, automatisation...)</p>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="portfolio">
          <h2>Portfolio</h2>
          <div className="portfolio-list">
            <div className="portfolio-card">
              <h4>Projet 1</h4>
              <p>Site e-commerce moderne avec React & Stripe</p>
            </div>
            <div className="portfolio-card">
              <h4>Projet 2</h4>
              <p>Application mobile de réservation (Flutter)</p>
            </div>
            <div className="portfolio-card">
              <h4>Projet 3</h4>
              <p>Automatisation de reporting (Python)</p>
            </div>
            <div className="portfolio-card">
              <h4>Bot Discord sur-mesure</h4>
              <p>Bot Discord avancé pour gestion de communauté, jeux, notifications, autorank, automod, logs, commandes personnalisées, etc.</p>
            </div>
          </div>
        </section>

        {/* Logos/Technos Section */}
        <section className="technos">
          <h2>Technologies maîtrisées</h2>
          <div className="technos-logos">
            <div className="tech-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/discordjs/discordjs-original.svg" alt="Discord.js" title="Discord.js" />
              <span>Discord.js</span>
            </div>
            <div className="tech-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" title="React" />
              <span>React</span>
            </div>
            <div className="tech-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" title="TypeScript" />
              <span>TypeScript</span>
            </div>
            <div className="tech-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" title="JavaScript" />
              <span>JavaScript</span>
            </div>
            <div className="tech-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" title="Python" />
              <span>Python</span>
            </div>
            <div className="tech-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" title="Node.js" />
              <span>Node.js</span>
            </div>
            <div className="tech-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" title="HTML5" />
              <span>HTML5</span>
            </div>
            <div className="tech-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" title="CSS3" />
              <span>CSS3</span>
            </div>
            <div className="tech-item">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter" title="Flutter" />
              <span>Flutter</span>
            </div>
          </div>
        </section>

        {/* Statistiques Section */}
        <section className="stats">
          <div className="stat-card">
            <span className="stat-value">+20</span>
            <span className="stat-label">Projets réalisés</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">100%</span>
            <span className="stat-label">Satisfaction client</span>
          </div>
          <div className="stat-card">
            <span className="stat-value">7j/7</span>
            <span className="stat-label">Support & suivi</span>
          </div>
        </section>

        {/* Engagement Section */}
        <section className="engagement">
          <h2>Pourquoi me choisir ?</h2>
          <ul>
            <li>Réactivité et disponibilité</li>
            <li>Solutions 100% sur-mesure</li>
            <li>Accompagnement et suivi personnalisé</li>
            <li>Transparence et communication</li>
          </ul>
        </section>

        {/* Processus Section */}
        <section className="processus">
          <h2>Mon Processus</h2>
          <ol>
            <li>Écoute de vos besoins et analyse du projet</li>
            <li>Proposition de solution et devis gratuit</li>
            <li>Développement et échanges réguliers</li>
            <li>Livraison, tests et ajustements</li>
            <li>Support et suivi après livraison</li>
          </ol>
        </section>

        {/* FAQ Section */}
        <section className="faq">
          <h2>Questions fréquentes</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h4>Quels types de projets réalises-tu ?</h4>
              <p>Tous types de projets numériques : sites web, applications, bots, scripts, outils métiers, etc.</p>
            </div>
            <div className="faq-item">
              <h4>Quels sont tes délais ?</h4>
              <p>Je m’adapte à vos besoins, la plupart des projets sont livrés en quelques jours à quelques semaines selon la complexité.</p>
            </div>
            <div className="faq-item">
              <h4>Comment se passe le suivi ?</h4>
              <p>Je reste disponible après la livraison pour toute question, correction ou évolution.</p>
            </div>
            <div className="faq-item">
              <h4>Le devis est-il gratuit ?</h4>
              <p>Oui, le devis et l’analyse de votre besoin sont 100% gratuits et sans engagement.</p>
            </div>
          </div>
        </section>

        {/* Blog / Conseils Section */}
        <section className="blog">
          <h2>Blog & Conseils</h2>
          <div className="blog-list">
            <article className="blog-item">
              <h4>🚀 5 astuces pour un site web ultra-rapide</h4>
              <p>Optimisez vos images, utilisez le lazy loading, minifiez vos scripts, activez le cache navigateur et privilégiez un hébergement performant pour booster la vitesse de votre site.</p>
              <span className="blog-date">Mai 2025</span>
            </article>
            <article className="blog-item">
              <h4>🤖 Pourquoi automatiser avec des bots ?</h4>
              <p>Les bots permettent de gagner du temps, d’automatiser les tâches répétitives et d’améliorer l’expérience utilisateur sur vos plateformes (Discord, web, etc.).</p>
              <span className="blog-date">Avril 2025</span>
            </article>
            <article className="blog-item">
              <h4>🔒 Sécuriser son application en 3 réflexes</h4>
              <p>1. Validez toujours les entrées utilisateur. 2. Mettez à jour vos dépendances. 3. Utilisez HTTPS et chiffrez les données sensibles.</p>
              <span className="blog-date">Mars 2025</span>
            </article>
          </div>
        </section>

        {/* Contact Discord direct */}
        <div className="discord-contact">
          <p>Pour toute demande, contactez-moi directement sur Discord : <strong>zer1xe</strong></p>
        </div>

        {/* Badge de disponibilité */}
        <div className="availability-badge available">
          <span>✅ Disponible pour de nouveaux projets</span>
        </div>

        <footer>
          <p>© {new Date().getFullYear()} Antagoniste - Tous droits réservés</p>
        </footer>
      </div>
    </>
  )
}

export default App
