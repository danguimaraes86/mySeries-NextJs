import { getYear } from '../../libs/dateParsing'
import Link from 'next/link'
import Image from 'next/image'

export default function SeriesCard({ poster, name, year, id }) {

  function handleSeriesPoster(img){
    if(!img){
      return (
        <div className='card-img-top d-flex justify-content-center align-items-center bg-secondary h-100'>
          <i className='bi bi-image text-info ' style={{ fontSize: '6em' }} />
        </div>
      )
    } else {
      return (
        <Image 
          src={series_poster_url}
          width={500}
          height={800}
          className='card-img-top'
          alt={`poster da série ${name}`}
        />
      )
    }
  }

  const series_poster_url = `https://image.tmdb.org/t/p/w500/${poster}`
  const series_year = getYear(year)
  
  return (
    <div className='col'>
      <div className='card h-100'>
        {handleSeriesPoster(poster)}
        <div className='card-body'>
          <h5 className='card-title'>{`${name} ${series_year}`}</h5>
        </div>
        <Link href={{
          pathname: '/details/[id]',
          query: { id: id }
        }}>
          <a className='text-decoration-none'>
            <div className='card-footer bg-dark'>
              <small className='text-info'>Mais detalhes <i className='bi bi-arrow-up-right-square-fill' /></small>
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}
