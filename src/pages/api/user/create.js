import { handleAllowedMethod } from '../../../libs/handleAllowedMethod'
import { Create } from '../../../models/Users'

export default async (req, res) => {
  handleAllowedMethod(req.method, 'POST', async () => {
    const { userID, password } = req.body
    const user = await Create(userID, password)
    return res.status(201).json(user)
  }, res)
}
