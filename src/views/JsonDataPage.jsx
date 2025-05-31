import { useEffect, useState } from 'react'
import paises from '../data/paises.json'
import './CarruselPaises.css'

export default function CarruselPaises() {
  const [startIndex, setStartIndex] = useState(0)
  const [activo, setActivo] = useState(true)

  useEffect(() => {
    if (!activo) return

    const intervalo = setInterval(() => {
      setStartIndex(prev => (prev + 3) % paises.length)
    }, 3000)

    return () => clearInterval(intervalo)
  }, [activo])

  const visibles = [
    paises[startIndex],
    paises[(startIndex + 1) % paises.length],
    paises[(startIndex + 2) % paises.length]
  ]

  return (
    <div className="carrusel-wrapper">
      <div className="carrusel-container">
        {visibles.map(pais => (
          <div key={pais.id} className="carrusel-card">
            <img src={pais.image} alt={pais.title} className="carrusel-img" />
            <h2>{pais.title}</h2>
            <h4>{pais.category}</h4>
            <p>{pais.description}</p>
          </div>
        ))}
      </div>

      <button className="carrusel-pause-btn" onClick={() => setActivo(!activo)}>
        {activo ? '⏸️ Pausar' : '▶️ Reanudar'}
      </button>
    </div>
  )
}
