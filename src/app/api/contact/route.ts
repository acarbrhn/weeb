import { NextResponse } from 'next/server'
import clientPromise from '@/lib/mongodb'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // MongoDB'ye bağlan
    const client = await clientPromise
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