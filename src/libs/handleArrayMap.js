import SeriesCard from '../components/SeriesCard'

export default function handleArrayMap(data, errorMessage) {

  if (data.length === 0) {
    return (
      <div className=''>
        <h4>{errorMessage}</h4>
      </div>
    )
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