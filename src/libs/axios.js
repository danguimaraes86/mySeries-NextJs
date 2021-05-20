import axios from 'axios'

export async function apiFetcher(url, method, payload) {
  const { data } = await axios({
    url: url,
    method: method,
    data: payload,
  })
  return data
}