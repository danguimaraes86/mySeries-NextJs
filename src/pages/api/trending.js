import tmdbRequest from '../../libs/tmdbRequest'

export default async (req, res) => {
  const params = {
    language: 'pt-BR'
  }
  const result = await tmdbRequest('/trending/tv/week', params)
  res.status(200).json(result)
}
