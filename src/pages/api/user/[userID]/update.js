import { handleAllowedMethod } from '../../../../libs/handleAllowedMethod'
import { Update } from '../../../../models/Users'

export default async (req, res) => {
  handleAllowedMethod(req.method, 'POST', async () => {
    const { username } = req.query
    const { password } = req.body
    const result = await Update(username, password)
    return res.status(201).json(result)
  }, res)
}
