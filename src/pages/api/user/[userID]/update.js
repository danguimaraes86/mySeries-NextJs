import { connectToDatabase } from '../../../../libs/mongodb'

export default async (req, res) => {
  const { userID } = req.query
  const { password } = req.body
  const { db } = await connectToDatabase()
  const result = await db.collection('Users').findOneAndUpdate({ userID }, { $set: { password } }, { returnOriginal: false })
  res.status(201).json(result)
}
