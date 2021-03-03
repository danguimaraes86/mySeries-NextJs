import tmdbRequest from '../../../libs/tmdbRequest'

export default async (req, res) => {
  const { id } = req.query
  const params = {
    language: 'pt-BR',
    append_to_response: 'external_ids'
  }
  const series = await tmdbRequest(`/tv/${id}`, params)
  const { results } = await tmdbRequest(`/tv/${id}/watch/providers`)
  series['providers'] = results.BR.flatrate

  res.status(200).json(series)
}
