import { handleAllowedMethod } from '../../../../libs/handleAllowedMethod'
import { FindOne } from '../../../../models/Users'

export default async (req, res) => {
  handleAllowedMethod(req.method, 'GET', async () => {
    const { userID } = req.query
    const user = await FindOne(userID)
    return res.status(201).json(user)
  }, res)
}
