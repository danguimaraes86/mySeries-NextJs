import Link from 'next/link'

export default function SeriesCard({ poster, name, year, id }) {
  const poster_url = `https://image.tmdb.org/t/p/w500/${poster}`
  
  return (
    <div className='col'>
      <div className='card h-100'>
        <img src={poster_url} className='card-img-top' alt={`poster da série ${name}`} />
        <div className='card-body'>
          <h5 className='card-title'>{ name }</h5>
        </div>
        <Link href='/'>
          <a className='text-decoration-none'>
            <div className='card-footer bg-dark'>
              <small className='text-info'>Mais detalhes <i className="bi bi-arrow-up-right-square-fill" /></small>
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}
