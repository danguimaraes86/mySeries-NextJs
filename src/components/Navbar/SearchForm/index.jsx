import { useState } from 'react'
import { useRouter } from 'next/router'

export default function SearchForm() {

  const router = useRouter()
  let [searchValue, setSearchValue] = useState('')

  function handleFormSubmit(e) {
    e.preventDefault()
    router.push({
      pathname: '/search',
      query: { value: searchValue }
    })
  }

  return (
    <form
      className='form-inline'
      onSubmit={e => handleFormSubmit(e)}
    >
      <div className='input-group'>
        <input
          id='searchSeries'
          type='text'
          className='form-control'
          placeholder='Digite sua busca...'
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
        />
        <button
          type='submit'
          className='btn input-group-text bg-info border-info'
        >
          <i className='bi bi-search' />
        </button>
      </div>
    </form>
  )
}
