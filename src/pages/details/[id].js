import Layout from '../../components/Layout'

export default function SeriesDetails({ series }) {
  return (
    <Layout>
      <h1>Series Details: {series.id}</h1>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.query

  const series = {
    id: id
  }
  // const params = {
  //   query: value,
  //   language: 'pt-BR'
  // }
  // const { results } = await tmdbRequest('/search/tv', params)

  return {
    props: {
      series
    }
  }
}