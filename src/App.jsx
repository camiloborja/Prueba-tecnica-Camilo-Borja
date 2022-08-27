import { useEffect } from 'react'
import { useState } from 'react'
import './App.css'
import Table from './components/Table'

function App() {
  let deads = 0, alives = 0
  const [persons, setPersons] = useState()
  const URL = 'https://rickandmortyapi.com/api/character'
  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => setPersons(data.results))
  }, [])

  persons?.map(person => {
    if (person.status === 'Alive') {
      return alives++
    } else if (person.status === 'Dead') {
      return deads++
    }
  })

  return (
    <div className="App">
      <header className='header__tittle'>
        <img src="/Logo-RandM.png" alt="Imagen no disponible" className='principal__img' />
        <div className='header__icons'>
          <img src="/Icono de campana.png" alt="Imagen no disponible" />
          <img src="/Home.png" alt="Imagen no disponible" />
        </div>
      </header>
      
        <div className='tittle'>
          <img src="/camera-movie.png" alt="Imagen no disponible" />
          <h1 className='tittle__text'>Personajes</h1>
        </div>
        <div className='number__of__persons'>
          <p className='number__gray'>Total de personajes <span> {persons?.length}</span></p>
          <p className='number__blue'><img src="/Icono de vivo.png" alt="Imagen no disponible" /> Personajes vivos<span>{alives}</span>  |  <img src="/Icono de muerto.png" alt="Imagen no disponible" /> Personajes muertos <span>{deads}</span></p>
          <div className='search'>
            <img src="/Icono de busqueda.png" alt="Imagen no disponible" />
            <input type="search" placeholder='Buscar'></input>
          </div>
        </div>
        <div className="table">
          <div className="tittle__table">
            <span className='items'>Nombre</span>
            <span className='items'>Vivo</span>
            <span className='items'>Especie</span>
            <span className='items'>Genero</span>
            <span className='items'>Origen</span>
            <span className='items'>Locación</span>
            <span className='items'>Capitulos</span>
            <span className='items'>Fecha</span>
            <span className='items'>Ver imagen</span>
          </div>
          <div className="table__info">
            {
              persons?.map(person => (
                <Table
                  key={person.id}
                  person={person}
                />
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default App
