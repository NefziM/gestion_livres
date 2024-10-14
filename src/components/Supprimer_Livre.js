import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Supprimer_livre({ livres, setLivres }) {
  const { index } = useParams();
  const navigate = useNavigate();

  const handleDeleteLivre = () => {
    const updatedLivres = livres.filter((_, i) => i !== parseInt(index, 10));
    setLivres(updatedLivres);
    navigate('/list');
  };

  return (
    <div>
      <h2>Supprimer ce livre</h2>
      <p>
      Êtes-vous sûr de vouloir supprimer "{livres[index]?.title}" de {livres[index]?.author}?
      </p>
      <button onClick={handleDeleteLivre}>Supprimer</button>
    </div>
  );
}

export default Supprimer_livre;