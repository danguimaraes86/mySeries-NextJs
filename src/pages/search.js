import tmdbRequest from '../libs/tmdbRequest'
import handleSearchResults from '../libs/handleArrayMap'

import Layout from '../components/Layout'
import ResultsWrapper from '../components/CardsWrapper'

export default function Search({ results }) {
  return (
    <Layout>
      <ResultsWrapper title={'Resultados'}>
        {handleSearchResults(results, true, 'Nenhum resultado encontrado')}
      </ResultsWrapper>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const { value } = context.query
  if (!value) {
    return { notFound: true }
  }

  const params = {
    query: value,
    language: 'pt-BR'
  }
  const { results } = await tmdbRequest('/search/tv', params)

  return {
    props: {
      results
    }
  }
}
