import React from 'react';
import '../css/homescreen.css';

const HomeScreen = () => {
  return (
    <div className="home-screen">
      <header className="header">
        <input type="text" placeholder="Search your destination" className="search-bar" />
        <nav className="nav-bar">
          <a href="/">Home</a>
          <a href="/about">About us</a>
          <a href="/contact">Contact</a>
          <a href="/signin">Sign in</a>
        </nav>
      </header>
      <main className="main-content">
        <h1>START YOUR TRIP with TRAVEL6</h1>
        <div className="search-options">
          <button className="option-button">Destinations</button>
          <button className="option-button">Hotels</button>
          <button className="option-button">Flight</button>
        </div>
        <div className="search-form">
          <input type="text" placeholder="Destination" className="form-input" />
          <input type="date" className="form-input" />
          <input type="date" className="form-input" />
          <input type="text" placeholder="1 room, 2 adults, 0 children" className="form-input" />
          <button className="search-button">SEARCH</button>
        </div>
        <section className="recommended-section">
          <h2>RECOMMENDED</h2>
          <p>Popular Beach in Indonesia</p>
          <h3>PANDAWA BEACH</h3>
          <p>
            Pandawa Beach is one of the popular natural tourist destinations located in Bali Province. 
            This beach has a panoramic view that spoils the eyes plus a calm and comfortable atmosphere 
            like the Gods. The name of the beach located in Kutuh Village, South Kuta District, Badung 
            Regency is taken from the five Mahabharata brothers consisting of Yudistira, Bima, Arjuna, 
            Nakula, and Sadewa.
          </p>
          <img src="path/to/pandawa-beach.jpg" alt="Pandawa Beach" className="beach-image" />
        </section>
      </main>
    </div>
  );
};

export default HomeScreen;
