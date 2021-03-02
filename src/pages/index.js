import tmdbRequest from '../libs/tmdbRequest'

import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import TrendingWrapper from '../components/TrendingWrapper'
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
      <Navbar />
      <TrendingWrapper>
        {handleTrendingSeries(trending)}
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