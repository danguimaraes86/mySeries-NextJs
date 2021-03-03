import axios from 'axios'

export default async function tmdbRequest(url, params) {
  const { data } = await axios({
    baseURL: process.env.TMDB_BASEURL,
    method: 'GET',
    url: url,
    params: params,
    headers: {
      'Authorization': `Bearer ${process.env.TMDB_APIKEY}`
    }
  })
  return data
}