'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Slider */}
      <section className="relative w-full h-[600px]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          className="w-full h-full"
        >
          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image
                src="/images/hero-bg.jpg"
                alt="Slider 1"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    Doğal ve Sağlıklı Ürünler
                  </h1>
                  <p className="text-xl md:text-2xl mb-8">
                    Acar Tarım kalitesiyle sofranıza geliyor
                  </p>
                  <Link
                    href="/urunler"
                    className="bg-green-800 text-white px-8 py-3 rounded-full hover:bg-green-700 transition"
                  >
                    Ürünlerimiz
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* Diğer sliderlar için aynı yapı tekrarlanabilir */}
        </Swiper>
      </section>

      {/* Ürün Kategorileri */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ürün Kategorilerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="relative h-64">
                <Image
                  src="/images/products/zeytinyagi.jpg"
                  alt="Zeytinyağı"
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Zeytinyağı</h3>
                <p className="text-gray-600 mb-4">
                  Doğal ve sağlıklı zeytinyağlarımız
                </p>
                <Link
                  href="/urunler/zeytinyagi"
                  className="text-green-800 hover:text-green-700"
                >
                  İncele →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="relative h-64">
                <Image
                  src="/images/products/zeytin.jpg"
                  alt="Zeytin"
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Zeytin</h3>
                <p className="text-gray-600 mb-4">
                  Taze ve lezzetli zeytinlerimiz
                </p>
                <Link
                  href="/urunler/zeytin"
                  className="text-green-800 hover:text-green-700"
                >
                  İncele →
                </Link>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden group">
              <div className="relative h-64">
                <Image
                  src="/images/products/buyukbas.jpg"
                  alt="Büyükbaş Hayvancılık"
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Büyükbaş Hayvancılık</h3>
                <p className="text-gray-600 mb-4">
                  Kaliteli büyükbaş hayvan yetiştiriciliği
                </p>
                <Link
                  href="/urunler/buyukbas"
                  className="text-green-800 hover:text-green-700"
                >
                  İncele →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hakkımızda Bölümü */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Acar Tarım</h2>
              <p className="text-gray-600 mb-6">
                Yıllardır süregelen tecrübemiz ve modern tarım teknikleriyle,
                kaliteli ve sağlıklı ürünler üretiyoruz. Müşteri memnuniyeti ve
                sürdürülebilir tarım bizim için en önemli değerlerdir.
              </p>
              <Link
                href="/hakkimizda"
                className="inline-block bg-green-800 text-white px-6 py-3 rounded-full hover:bg-green-700 transition"
              >
                Daha Fazla Bilgi
              </Link>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/images/hero-bg.jpg"
                alt="Hakkımızda"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* İstatistikler */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-lg">Yıllık Tecrübe</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-lg">Dönüm Arazi</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg">Çalışan</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">3000+</div>
              <div className="text-lg">Mutlu Müşteri</div>
            </div>
          </div>
        </div>
      </section>

      {/* İletişim CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Bizimle İletişime Geçin</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Ürünlerimiz, hizmetlerimiz veya işbirliği fırsatları hakkında
            bilgi almak için bizimle iletişime geçebilirsiniz.
          </p>
          <Link
            href="/iletisim"
            className="inline-block bg-green-800 text-white px-8 py-3 rounded-full hover:bg-green-700 transition"
          >
            İletişim
          </Link>
        </div>
      </section>
    </main>
  )
}
