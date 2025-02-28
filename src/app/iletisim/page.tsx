'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({
    type: null,
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Bir hata oluştu')
      }

      setStatus({
        type: 'success',
        message: 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.',
      })
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Mesajınız gönderilemedi. Lütfen daha sonra tekrar deneyin.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">İletişim</h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* İletişim Bilgileri */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Bize Ulaşın</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-1">Adres</h3>
                <p className="text-gray-600">
                  Kavakbaşı, Kavakbaşı Köyü Yolu
                  <br />
                  20190 Pamukkale/Denizli
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-1">Telefon</h3>
                <p className="text-gray-600">+90 (535) 743 14 72</p>
              </div>
              <div>
                <h3 className="font-medium mb-1">E-posta</h3>
                <p className="text-gray-600">info@tarimisletmesi.com</p>
              </div>
              <div>
                <h3 className="font-medium mb-1">Çalışma Saatleri</h3>
                <p className="text-gray-600">
                  Pazartesi - Cumartesi: 09:00 - 18:00
                  <br />
                  Pazar: Kapalı
                </p>
              </div>
            </div>
          </div>

          {/* İletişim Formu */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Mesaj Gönderin</h2>
            {status.type && (
              <div
                className={`p-4 rounded-lg mb-6 ${
                  status.type === 'success'
                    ? 'bg-green-50 text-green-800'
                    : 'bg-red-50 text-red-800'
                }`}
              >
                {status.message}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Adınız Soyadınız
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  E-posta Adresiniz
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Telefon Numaranız
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Gönderiliyor...' : 'Mesaj Gönder'}
              </button>
            </form>
          </div>
        </div>

        {/* Harita */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Konum</h2>
          <div className="h-96 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3147.7673768176387!2d29.063672376677684!3d37.96821737297674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c7133b7d6c67fd%3A0x20ad5d60908f965e!2sACARLAR%20%C3%87%C4%B0FTL%C4%B0%C4%9E%C4%B0!5e0!3m2!1str!2str!4v1709931116899!5m2!1str!2str"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  )
} 