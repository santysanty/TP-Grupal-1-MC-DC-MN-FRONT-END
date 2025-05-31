import CardTeam from '../components/Sidebar/CardTeam'

const integrantes = [
  {
    id: 'daniel',
    nombre: 'Daniel Coria',
    imagen: '',
  },
  {
    id: 'maria',
    nombre: 'María Nazar',
    imagen: '/assets/flor.jpg',
  },
  {
    id: 'manuel',
    nombre: 'Manuel Correderas',
    imagen: 'https://manuel-correderas.github.io/ifts29_PFO2/img/perfil.jpg',
  },
  
  // ...otros
]

export default function HomePage() {
  return (
    <section>
      <h2>Nuestro equipo</h2>
      <div className="cards-grid">
        {integrantes.map(p => (
          <CardTeam
            key={p.id}
            id={p.id}
            nombre={p.nombre}
            imagen={p.imagen}
          />
        ))}
      </div>
    </section>
  )
}
