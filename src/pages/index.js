import tmdbRequest from '../libs/tmdbRequest'
import handleTrendingSeries from '../libs/handleArrayMap'

import TrendingWrapper from '../components/CardsWrapper'

export default function Home({ trending }) {

  return (
    <TrendingWrapper title={'Em alta'}>
      {handleTrendingSeries(trending, false, 'Nada encontrado')}
    </TrendingWrapper>
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