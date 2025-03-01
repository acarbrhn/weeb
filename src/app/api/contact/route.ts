import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI || ''
if (!uri) {
  throw new Error('MONGODB_URI ortam değişkeni tanımlanmamış')
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // MongoDB'ye bağlan
    const client = new MongoClient(uri)
    await client.connect()
    const db = client.db('weeb')
    const collection = db.collection('messages')

    // Mesajı veritabanına kaydet
    const result = await collection.insertOne({
      name,
      email,
      phone,
      message,
      createdAt: new Date()
    })

    await client.close()

    return NextResponse.json({
      success: true,
      message: 'Mesajınız başarıyla kaydedildi',
      data: { id: result.insertedId }
    })
  } catch (error) {
    console.error('Hata:', error)
    return NextResponse.json(
      { error: 'Mesaj kaydedilemedi' },
      { status: 500 }
    )
  }
} 