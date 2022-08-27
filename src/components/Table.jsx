import React from 'react'
import { useState } from 'react'

const Table = ({ person }) => {
  const [image, setImage] = useState('ocultImg')
  const [btn, setBtn] = useState('table__btn')
  const [btnAtl, setBtnAtl] = useState('ocultImg')
  
  const dates = person.created.split('T')
  let status = ''
  if (person.status === 'Alive') {
    status = '/Icono de vivo.png'
  } else if (person.status === 'Dead') {
    status = '/Icono de muerto.png'
  } else {
    status = '/Icono de unknown.png'
  }
  //La siguiente función sirve para mostrar y cerrar la imagen de cada personaje, cambiando estados que me permiten cambiar las clases
  const showImage = () => {
    if (image == 'ocultImg') {
      setImage('showImg')
      setBtn('ocultImg')
      setBtnAtl('table__btn__red')
    } else {
      setImage('ocultImg')
      setBtn('table__btn')
      setBtnAtl('ocultImg')
    }
  }
  return (
    <div>
      <div className='table__dates'>
        <span className='items__table'>{person.name}</span>
        <span className='items__table'><img src={status} alt="Imagen no disponible" /></span>
        <span className='items__table'>{person.species}</span>
        <span className='items__table'>{person.gender}</span>
        <span className='items__table'>{person.origin.name}</span>
        <span className='items__table'>{person.location.name}</span>
        <span className='items__table'>{person.episode.length}</span>
        <span className='items__table'>{dates[0]}</span>
        <div className='table__img'>
          <button className={btn} onClick={showImage}><img src='/Icono imagen.png' alt="Imagen no disponible" />Ver imagen</button>
          <button className={btnAtl} onClick={showImage}><img src='/Icono de muerto.png' alt="Imagen no disponible" /></button>
          <div className={image}>
            <img src={person.image} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table