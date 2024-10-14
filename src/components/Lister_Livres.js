import React from 'react';
import { Link } from 'react-router-dom';

function Lister_Livres({ livres, setLivres }) {
  return (
    <div>
      <h2>Liste des livres</h2> 
      {livres.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Titre</th>
              <th>Auteur</th>
              <th>Editer</th>
              <th>Supprimer</th>
            </tr>
          </thead>
          <tbody>
            {livres.map((livre, index) => (
              <tr key={livre.id}>
                <td>{livre.id}</td>
                <td>{livre.title}</td>
                <td>{livre.author}</td>
                <td>
                  <Link to={`/edit/${index}`}>
                    <button>Modifier</button>
                  </Link>
                </td>
                <td>
                  <Link to={`/delete/${index}`}>
                    <button id="supprimer">Effacer</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>La liste est vide!!!</p>
      )}
    </div>
  );
}

export default Lister_Livres;
