import tmdbRequest from '../libs/tmdbRequest'
import handleTrendingSeries from '../libs/handleArrayMap'

import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import TrendingWrapper from '../components/CardsWrapper'

export default function Home({ trending }) {

  return (
    <Layout>
      <Navbar />
      <TrendingWrapper title={'Em alta'}>
        {handleTrendingSeries(trending, 'Nada encontrado')}
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