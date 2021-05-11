import { connectToDatabase } from '../database/mongodb'

export async function Index() {
  const { db } = await connectToDatabase()
  const index = await db.collection('Users').find().toArray()
  return index
}

export async function Create(userID, password) {
  const { db } = await connectToDatabase()
  const { ops: user } = await db.collection('Users').insertOne({ userID, password })
  return user[0]
}

export async function FindOne(userID) {
  const { db } = await connectToDatabase()
  const user = await db.collection('Users').findOne({ userID })
  return user
}

export async function Update(userID, password) {
  const { db } = await connectToDatabase()
  const result = await db.collection('Users').findOneAndUpdate({ userID }, { $set: { password } }, { returnOriginal: false })
  return result
}