import tmdbRequest from '../libs/tmdbRequest'

import Layout from '../components/Layout'
import TrendingWrapper from '../components/CardsWrapper'
import SeriesCard from '../components/SeriesCard'

export default function Home({ trending }) {

  function handleTrendingSeries(data) {
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

  return (
    <Layout>
      <TrendingWrapper>
        <h5 className='display-5'>Em alta <i className='bi bi-graph-up' /></h5>
        <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3'>
          {handleTrendingSeries(trending)}
        </div>
      </TrendingWrapper>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const params = { language: 'pt-BR' }
  const { results: trending } = await tmdbRequest('/trending/tv/week', params)

  return {
    props: {
      trending
    }
  }
}