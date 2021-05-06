import { connectToDatabase } from '../../../libs/mongodb'

export default async (req, res) => {
  const { userID, password } = req.body
  const { db } = await connectToDatabase()
  const { ops: user } = await db.collection('Users').insertOne({ userID, password })
  res.status(201).json(user[0])
}
