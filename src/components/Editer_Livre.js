import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Editer_Livre({ livres, setLivres }) {
  const { index } = useParams();
  const navigate = useNavigate();
  const [updatedLivre, setUpdatedLivre] = useState(livres[index] || { title: '', author: '' });

  const handleUpdateLivre = () => {
    const updatedLivres = [...livres];
    updatedLivres[index] = updatedLivre;
    setLivres(updatedLivres);
    navigate('/list');
  };

  return (
    <div>
      <h2>Modifier un livre</h2>
      <input
        type="text"
        placeholder="Titre"
        value={updatedLivre.title}
        onChange={(e) => setUpdatedLivre({ ...updatedLivre, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Auteur"
        value={updatedLivre.author}
        onChange={(e) => setUpdatedLivre({ ...updatedLivre, author: e.target.value })}
      />
      <button onClick={handleUpdateLivre}>Enregistrer</button>
    </div>
  );
}

export default Editer_Livre;