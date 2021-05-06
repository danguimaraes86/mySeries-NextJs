import { connectToDatabase } from '../../../../database/mongodb'
import { handleAllowedMethod } from '../../../../libs/handleAllowedMethod'

export default async (req, res) => {
  handleAllowedMethod(req.method, 'GET', async () => {
    const { userID } = req.query
    const { db } = await connectToDatabase()
    const user = await db.collection('Users').findOne({ userID })
    res.status(201).json(user)
  }, res)
}
