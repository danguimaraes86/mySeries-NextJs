import tmdbRequest from '../../../libs/tmdbRequest'

export default async (req, res) => {
  const { id } = req.query
  const params = {
    language: 'pt-BR',
    append_to_response: 'external_ids'
  }
  const series = await tmdbRequest(`/tv/${id}`, params)
  series['providers'] = []
  
  const { results: providers } = await tmdbRequest(`/tv/${id}/watch/providers`)
  if(providers.hasOwnProperty('BR')){
    if(providers.BR.hasOwnProperty('flatrate')){
      series.providers.push(...providers.BR.flatrate)
    }
    if(providers.BR.hasOwnProperty('ads')){
      series.providers.push(...providers.BR.ads)
    }
  }

  res.status(200).json(series)
}
