import { connectToDatabase } from '../../../database/mongodb'
import { handleAllowedMethod } from '../../../libs/handleAllowedMethod'

export default async (req, res) => {
  handleAllowedMethod(req.method, 'GET', async () => {
    const { db } = await connectToDatabase()
    const index = await db.collection('Users').find().toArray()
    res.status(201).json(index)
  }, res)
}
