import tmdbRequest from '../../libs/tmdbRequest'

export default async (req, res) => {
  const { value } = req.query
  const params = {
    query: value,
    language: 'pt-BR'
  }
  const result = await tmdbRequest('/search/tv', params)
  res.status(200).json(result)
}
