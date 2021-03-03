import tmdbRequest from '../../libs/tmdbRequest'

import Layout from '../../components/Layout'

export default function SeriesDetails({ series }) {
  console.log(series)
  
  return (
    <Layout>
      <h1>Series Details: {series.id}</h1>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const { id } = context.query
  const params = {
    language: 'pt-BR',
    append_to_response: 'external_ids'
  }
  const series = await tmdbRequest(`/tv/${id}`, params)
  const { results } = await tmdbRequest(`/tv/${id}/watch/providers`)

  series['providers'] = results.BR.flatrate

  return {
    props: {
      series
    }
  }
}