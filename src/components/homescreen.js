import 'bootstrap/dist/css/bootstrap.min.css'; // Pastikan Bootstrap CSS diimpor
import React from 'react';

const HomeScreen = () => {
  return (
    <div className="home-screen bg-dark text-white" style={{ backgroundImage: "url('../assets/img/homescreen/Pandawa-bg.png')" }}>
      <header className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="../assets/img/logo.png" alt="Logo" height="40" className="d-inline-block align-text-top me-2" />
            DESTINA6
          </a>
          <div className="collapse navbar-collapse">
            <input type="text" placeholder="Search your destination" className="form-control me-2" />
            <nav className="navbar-nav ms-auto">
              <a className="nav-link active" href="/">Home</a>
              <a className="nav-link" href="/about">About us</a>
              <a className="nav-link" href="/contact">Contact</a>
              <a className="nav-link" href="/signin">Sign in</a>
            </nav>
          </div>
        </div>
      </header>
      <main className="container text-center mt-4">
        <h1>START YOUR TRIP with TRAVEL6</h1>
        <div className="btn-group mt-3 mb-4" role="group">
          <button type="button" className="btn btn-secondary">Destinations</button>
          <button type="button" className="btn btn-secondary">Hotels</button>
          <button type="button" className="btn btn-secondary">Flight</button>
          <button type="button" className="btn btn-secondary">Bus</button>
        </div>
        <div className="d-flex justify-content-center mb-4">
          <input type="text" placeholder="Destination" className="form-control me-2" />
          <input type="date" className="form-control me-2" />
          <input type="date" className="form-control me-2" />
          <input type="text" placeholder="1 room, 2 adults, 0 children" className="form-control me-2" />
          <button className="btn btn-dark">SEARCH</button>
        </div>
        <section className="text-start bg-light p-4 rounded-3" style={{ color: '#333' }}>
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
          <img src="../assets/img/homescreen/pandawa-beach.jpg" alt="Pandawa Beach" className="img-fluid rounded-3" />
        </section>
      </main>
    </div>
  );
};

export default HomeScreen;
