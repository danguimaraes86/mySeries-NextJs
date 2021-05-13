import { handleAllowedMethod } from '../../../libs/handleAllowedMethod'
import { Create } from '../../../models/Users'

export default async (req, res) => {
  handleAllowedMethod(req.method, 'POST', async () => {
    const { username, password } = req.body
    const user = await Create(username, password)
    return res.status(201).json(user)
  }, res)
}
