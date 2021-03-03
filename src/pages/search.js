import tmdbRequest from '../libs/tmdbRequest'
import handleSearchResults from '../libs/handleArrayMap'

import Layout from '../components/Layout'
import NavBar from '../components/Navbar'
import ResultsWrapper from '../components/CardsWrapper'

export default function Home({ results }) {

  return (
    <Layout>
      <NavBar />
      <ResultsWrapper title={'Resultados'}>
        {handleSearchResults(results, 'Nenhum resultado encontrado')}
      </ResultsWrapper>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const { type, value } = context.query
  if (!type || !value) {
    return { notFound: true }
  }

  const params = {
    query: value,
    language: 'pt-BR'
  }
  const { results } = await tmdbRequest(`/search/${type}`, params)

  return {
    props: {
      results
    }
  }
}