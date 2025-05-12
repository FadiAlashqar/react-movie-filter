import { useState } from 'react'

function App() {
  const initialFilms = [
    { id: 1, title: 'Inception', genre: 'Fantascienza' },
    { id: 2, title: 'Il Padrino', genre: 'Thriller' },
    { id: 3, title: 'Titanic', genre: 'Romantico' },
    { id: 4, title: 'Batman', genre: 'Azione' },
    { id: 5, title: 'Interstellar', genre: 'Fantascienza' },
    { id: 6, title: 'Pulp Fiction', genre: 'Thriller' },
  ]
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 mt-4">
            <h1>FILMS</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ul className="list-group">
              {initialFilms.map((film) => {
                return <li key={film.id} className="list-group-item">
                  <div>TITOLO : {film.title}</div>
                  <div>GENERE : {film.genre}</div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
