import React from 'react';
import NavBar from '../common/NavBar';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <NavBar/>
      <header className="hero-section">
        <h1>Banking App</h1>
        <p>
          Esperienza bancaria facile e sicura con la nostra suite completa di funzionalità, su misura per le tue esigenze finanziarie.
        </p>
      </header>

      <main className="main-content">
        <h2>Vantaggi e Funzionalità</h2>
        <div className="features-grid">
          <div className="feature">
          <h2 class="account-balance">Account Balance</h2>
            <h3>Gestione Facile del Conto</h3>
            Semplifica le tue finanze con la comoda visualizzazione del conto, transazioni e gestione del saldo.
          </div>
          <div className="feature">
            <i className="material-icons">payment</i>
            <h3>Pagamenti Veloci e Sicuri</h3>
            Invia e ricevi pagamenti in modo efficiente con la nostra piattaforma sicura e affidabile.
          </div>
        </div>

        <h2>Cosa Dicono i Nostri Clienti</h2>
        <div className="testimonials-carousel">
          <div className="testimonial">
            <blockquote>
              "Questa app ha rivoluzionato la mia esperienza bancaria. È facile da usare, efficiente e mantiene le mie finanze al sicuro."
              <span>- John Doe</span>
            </blockquote>
          </div>
        </div>

        <footer className="footer">
          Copyright © 2024 Your Company Name
        </footer>
      </main>
    </div>
  );
};

export default Home;
