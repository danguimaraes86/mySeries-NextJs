
export default function SeriesTitle({ network, providers }) {

  function handleProvider(providers) {
    if (providers.length === 0) {
      return (
        <span className='lh-1'>Nenhum encontrado</span>
      )
    } else {
      return providers.map((provider, index) => {
        return (
          <img
            key={index}
            className='img-fluid'
            style={{ height: '2em' }}
            src={`https://image.tmdb.org/t/p/w185/${provider.logo_path}`}
          />
        )
      })
    }
  }

  return (
    <div className='col-12 mb-2'>
      <div className='row'>

        <div className='col-6 col-md-4'>
          <h6>Networks</h6>
          <div className='d-flex justify-content-between flex-wrap'>
            <img
              className='img-fluid'
              style={{ height: '2em' }}
              src={`https://image.tmdb.org/t/p/w185/${network.logo_path}`}
            />
          </div>
        </div>

        <div className='col-6 col-md-4'>
          <h6>Streaming</h6>
          <div className='d-flex justify-content-between flex-wrap'>
            {handleProvider(providers)}
          </div>
        </div>

      </div>
    </div>
  )
}
