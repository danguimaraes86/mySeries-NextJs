import tmdbRequest from '../../libs/tmdbRequest'
import { getYear } from '../../libs/dateParsing'

import Image from 'next/image'
import Layout from '../../components/Layout'

export default function SeriesDetails({ series }) {
  const series_poster_url = `https://image.tmdb.org/t/p/w500/${series.poster_path}`
  const series_year = getYear(series.first_air_date)

  function handleProvider(series) {
    if (series.providers.length === 0) {
      return (
        <span className='lh-1'>Nenhum encontrado</span>
      )
    } else {
      return series.providers.map((provider, index) => {
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
    <Layout>
      <main className='border rounded-top p-3 mt-2'>
        <div className='row'>

          <div className='col-3'>

            <div className='row'>
              <div className='col-12'>
                <Image
                  className='rounded'
                  src={series_poster_url}
                  width={500}
                  height={800}
                  alt={`poster da série ${series.name}`}
                />
              </div>

              <div className='col-12'>
                <button className='btn btn-outline-dark w-100'>
                  Favorito <i className='bi bi-bookmark-star' />
                </button>
              </div>
            </div>

          </div>

          <div className='col'>
            <div className='row'>

              <div className='col-12 mb-4'>
                <span className='display-5'>
                  {series.name} {series_year}
                </span>
                <br />
                <span className='text-muted'>
                  {series.original_name} ({series.original_language.toUpperCase()})
                </span>
              </div>

              <div className='col-12 mb-2'>
                <h6>Descrição</h6>
                <p>{series.overview}</p>
              </div>

              <div className='col-12 mb-2'>
                <div className='row'>

                  <div className='col-4'>
                    <h6>Networks</h6>
                    <div className='d-flex justify-content-between flex-wrap'>
                      <img
                        className='img-fluid'
                        style={{ height: '2em' }}
                        src={`https://image.tmdb.org/t/p/w185/${series.networks[0].logo_path}`}
                      />
                    </div>
                  </div>

                  <div className='col-4'>
                    <h6>Streaming</h6>
                    <div className='d-flex justify-content-between flex-wrap'>
                      {handleProvider(series)}
                    </div>
                  </div>

                  {/* <div className='col-4'>
                    <h6>Popularidade</h6>
                    <div className='fs-2 lh-1'>
                      {series.vote_average}
                    </div>
                  </div> */}

                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout >
  )
}

export async function getServerSideProps(context) {
  const { id } = context.query
  const params = {
    language: 'pt-BR',
    append_to_response: 'external_ids'
  }
  const series = await tmdbRequest(`/tv/${id}`, params)
  series['providers'] = []

  const { results: providers } = await tmdbRequest(`/tv/${id}/watch/providers`)
  if (providers.hasOwnProperty('BR')) {
    if (providers.BR.hasOwnProperty('flatrate')) {
      series.providers.push(...providers.BR.flatrate)
    }
    if(providers.BR.hasOwnProperty('ads')){
      series.providers.push(...providers.BR.ads)
    }
  }

  return {
    props: {
      series
    }
  }
}