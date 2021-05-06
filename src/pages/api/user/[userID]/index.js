import { connectToDatabase } from '../../../../libs/mongodb'

export default async (req, res) => {
  const { userID } = req.query
  const { db } = await connectToDatabase()
  const user = await db.collection('Users').findOne({ userID })
  res.status(201).json(user)
}
