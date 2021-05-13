import { handleAllowedMethod } from '../../../libs/handleAllowedMethod'
import { Create } from '../../../models/Users'

export default async (req, res) => {
  handleAllowedMethod(req.method, 'POST', async () => {
    const user = await Create(req.body)
    return res.status(201).json(user)
  }, res)
}
