import { connectToDatabase } from '../database/mongodb'

export async function Index() {
  const { db } = await connectToDatabase()
  const index = await db.collection('Users').find().toArray()
  return index
}

export async function Create(newUser) {
  const { db } = await connectToDatabase()
  const { ops: user } = await db.collection('Users').insertOne(newUser)
  return user[0]
}

export async function FindOne(username) {
  const { db } = await connectToDatabase()
  const user = await db.collection('Users').findOne({ username })
  return user
}

export async function Update(username, password) {
  const { db } = await connectToDatabase()
  const result = await db.collection('Users').findOneAndUpdate({ username }, { $set: { password } }, { returnOriginal: false })
  return result
}