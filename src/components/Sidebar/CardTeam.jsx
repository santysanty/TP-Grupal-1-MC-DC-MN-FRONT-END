import { Link } from 'react-router-dom'

export default function CardTeam({ nombre, imagen, id }) {
  return (
    <div className="card-team">
      <img
        src={imagen}
        alt={nombre}
        className="card-team__img"
      />
      <h3 className="card-team__nombre">{nombre}</h3>
      <Link to={`/miembros/${id}`} className="btn-ver-mas">
        Ver más
      </Link>
    </div>
  )
}
