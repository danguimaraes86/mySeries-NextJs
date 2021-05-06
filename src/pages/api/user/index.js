import { connectToDatabase } from '../../../libs/mongodb'

export default async (req, res) => {
  const { db } = await connectToDatabase()
  const index = await db.collection('Users').find().toArray()
  res.status(201).json(index)
}
