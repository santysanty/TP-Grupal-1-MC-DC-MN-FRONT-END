import { useEffect, useState } from 'react'
import CardData from '../components/Sidebar/CardData'

export default function ApiData() {
  const [data, setData] = useState([])
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)

  const itemsPerPage = 6
  const startIndex = (page - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.json()
      })
      .then(json => setData(json.meals || []))
      .catch(err => setError(err))
  }, [])

  if (error) return <p>Error: {error.message}</p>
  if (!data.length) return <p>No se encontraron recetas.</p>

  return (
    <>
      <div className="cards-grid">
        {data.slice(startIndex, endIndex).map(meal => (
          <CardData
            key={meal.idMeal}
            id={meal.idMeal}
            title={meal.strMeal}
            category={meal.strCategory}
            image={meal.strMealThumb}
            description={meal.strInstructions.slice(0, 100) + '...'}
          />
        ))}
      </div>

      <div style={{ marginTop: '1.5rem', textAlign: 'center' }}>
        {[1, 2, 3].map(n => (
          <button
            key={n}
            onClick={() => setPage(n)}
            style={{
              margin: '0 0.5rem',
              padding: '0.5rem 1rem',
              backgroundColor: n === page ? '#007bff' : '#eee',
              color: n === page ? '#fff' : '#000',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer'
            }}
          >
            {n}
          </button>
        ))}
      </div>
    </>
  )
}

