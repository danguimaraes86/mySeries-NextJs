import { handleAllowedMethod } from '../../../libs/handleAllowedMethod'
import { Index } from '../../../models/Users'

export default async (req, res) => {
  handleAllowedMethod(req.method, 'GET', async () => {
    const index = await Index()
    return res.status(201).json(index)
  }, res)
}
