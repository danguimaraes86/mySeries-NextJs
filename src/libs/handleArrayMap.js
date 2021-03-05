import { getYear } from './dateParsing'
import SeriesCard from '../components/SeriesCard'

export default function handleArrayMap(data, sort, errorMessage) {
  if (data.length === 0) {
    return (
      <div className='col'>
        <h4>{errorMessage}</h4>
      </div>
    )
  } else {
    if(sort){
      sortByYear(data)
    }
    return data.map((series, index) => {
      return (
        <SeriesCard
          key={index}
          id={series.id}
          name={series.name}
          poster={series.poster_path}
          year={series.first_air_date}
        />
      )
    })
  }
}

function sortByYear(data) {
  return data.sort((a, b) => {
    let yearA = getYear(a.first_air_date)
    let yearB = getYear(b.first_air_date)
    if (yearA > yearB) {
      return -1;
    }
    if (yearA < yearB) {
      return 1;
    }
    return 0;
  })
}