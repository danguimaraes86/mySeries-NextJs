import { connectToDatabase } from '../../../libs/mongodb'

export default async (req, res) => {
  const { userID, password } = req.body
  const { client, db } = await connectToDatabase()
  if (client.isConnected()) {
    const { ops: user } = await db.collection('Users').insertOne({ userID, password })
    res.status(201).json(user[0])
  } else {
    res.status(500).send('Database not connected')
  }
}
