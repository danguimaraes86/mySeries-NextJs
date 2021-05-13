import axios from 'axios'

export default async function axiosRequest(url, method, payload) {
  const { data } = await axios({
    url: url,
    method: method,
    data: payload,
  })
  return data
}