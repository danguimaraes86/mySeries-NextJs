import { useState } from 'react'

export default function SearchForm() {

  let [searchValue, setSearchValue] = useState('')

  return (
    <form className='form-inline'>
      <div className='input-group'>
        <input
          id='searchSeries'
          type='text'
          className='form-control'
          aria-label='Text input with segmented dropdown button'
          placeholder='Digite sua busca...'
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
        <div className='input-group-text bg-info border-info'>
          <i class='bi bi-search' />
        </div>
      </div>
    </form>
  )
}
