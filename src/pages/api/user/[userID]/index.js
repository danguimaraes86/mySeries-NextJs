import { handleAllowedMethod } from '../../../../libs/handleAllowedMethod'
import { FindOne } from '../../../../models/Users'

export default async (req, res) => {
  handleAllowedMethod(req.method, 'GET', async () => {
    const { username } = req.query
    const user = await FindOne(username)
    return res.status(201).json(user)
  }, res)
}
