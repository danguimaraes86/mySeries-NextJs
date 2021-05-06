import { connectToDatabase } from '../../../libs/mongodb'
import { handleAllowedMethod } from '../../../libs/handleAllowedMethod'

export default async (req, res) => {
  handleAllowedMethod(req.method, 'POST', async () => {
    const { userID, password } = req.body
    const { db } = await connectToDatabase()
    const { ops: user } = await db.collection('Users').insertOne({ userID, password })
    res.status(201).json(user[0])
  }, res)
}
