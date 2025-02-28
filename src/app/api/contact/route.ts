import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Şimdilik sadece başarılı yanıt döndürüyoruz
    // E-posta gönderme özelliğini daha sonra ekleyeceğiz
    return NextResponse.json({
      success: true,
      message: 'Form başarıyla alındı',
      data: { name, email, phone, message }
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Form işlenemedi' },
      { status: 500 }
    )
  }
} 