import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AddLivre from './components/Ajout_Livre';
import EditLivre from './components/Editer_Livre';
import DeleteLivre from './components/Supprimer_Livre';
import LivreList from './components/Lister_Livres';
import './App.css';

function App() {
  const [livres, setLivres] = useState([]);

  return (
    <Router>
      <div className="navbar">
        <h1>Application de gestion des livres électroniques</h1>
        <div className="nav-links">
          <Link to="/add">Ajouter un livre</Link>
          <Link to="/list">Lister les livres</Link>
        </div>
      </div>
      <div className="container">
        <Routes>
          <Route path="/" element={<LivreList livres={livres} setLivres={setLivres} />} />
          <Route path="/add" element={<AddLivre livres={livres} setLivres={setLivres} />} />
          <Route path="/edit/:index" element={<EditLivre livres={livres} setLivres={setLivres} />} />
          <Route path="/delete/:index" element={<DeleteLivre livres={livres} setLivres={setLivres} />} />
          <Route path="/list" element={<LivreList livres={livres} setLivres={setLivres} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;