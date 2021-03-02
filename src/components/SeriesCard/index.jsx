import { getYear } from '../../libs/dateParsing'
import Link from 'next/link'

export default function SeriesCard({ poster, name, year, id }) {
  const series_poster_url = `https://image.tmdb.org/t/p/w500/${poster}`
  const series_year = getYear(year)
  
  return (
    <div className='col'>
      <div className='card h-100'>
        <img src={series_poster_url} className='card-img-top' alt={`poster da série ${name}`} />
        <div className='card-body'>
          <h5 className='card-title'>{`${name} (${series_year})`}</h5>
        </div>
        <Link href={`/details/${id}`}>
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
