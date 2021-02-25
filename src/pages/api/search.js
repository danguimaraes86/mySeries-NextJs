import tmdbRequest from '../../libs/tmdbRequest'

export default async (req, res) => {
  const { value, type } = req.query
  const params = {
    query: value
  }
  const result = await tmdbRequest(`/search/${type}`, params)
  res.status(200).json(result)
}
