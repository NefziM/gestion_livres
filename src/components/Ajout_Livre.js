import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Ajout_Livre({ livres, setLivres }) {
  const [newLivre, setNewLivre] = useState({ title: '', author: '' });
  const navigate = useNavigate();

  const handleAddLivre = () => {
    const livreAvecId = {
      ...newLivre,
      id: livres.length + 1 
    };
    setLivres([...livres, livreAvecId]);
    setNewLivre({ title: '', author: '' });
    navigate('/list');
  };

  return (
    <div>
      <h2>Ajouter un livre</h2>
      <input
        type="text"
        placeholder="Titre"
        value={newLivre.title}
        onChange={(e) => setNewLivre({ ...newLivre, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Auteur"
        value={newLivre.author}
        onChange={(e) => setNewLivre({ ...newLivre, author: e.target.value })}
      />
      <button onClick={handleAddLivre}>Ajouter</button>
    </div>
  );
}

export default Ajout_Livre;
