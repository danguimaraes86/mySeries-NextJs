
export default function SeriesTitle({ name, original_name, original_language, year }) {
  return (
    <div className='col-12 mb-4'>
      <span className='display-5'>
        {name} {year}
      </span>
      <br />
      <span className='text-muted'>
        {original_name} ({original_language.toUpperCase()})
      </span>
    </div>
  )
}
