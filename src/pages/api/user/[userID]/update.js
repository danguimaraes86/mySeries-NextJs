import { connectToDatabase } from '../../../../database/mongodb'
import { handleAllowedMethod } from '../../../../libs/handleAllowedMethod'

export default async (req, res) => {
  handleAllowedMethod(req.method, 'POST', async () => {
    const { userID } = req.query
    const { password } = req.body
    const { db } = await connectToDatabase()
    const result = await db.collection('Users').findOneAndUpdate({ userID }, { $set: { password } }, { returnOriginal: false })
    res.status(201).json(result)
  }, res)
}
