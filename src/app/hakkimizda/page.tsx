import Image from 'next/image'
import { SVGProps } from 'react'

export default function AboutPage() {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Hakkımızda</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            20 yılı aşkın tecrübemizle Türkiye&apos;nin önde gelen tarım
            işletmelerinden biri olarak, sürdürülebilir tarım uygulamalarıyla
            geleceğe yatırım yapıyoruz.
          </p>
        </div>

        {/* Misyon & Vizyon */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-green-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Misyonumuz</h2>
            <p className="text-gray-700">
              Sürdürülebilir tarım uygulamalarıyla, doğaya saygılı ve verimli
              üretim yaparak, ülkemizin tarım sektörüne katkıda bulunmak ve
              tüketicilerimize en kaliteli ürünleri sunmak.
            </p>
          </div>
          <div className="bg-green-50 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Vizyonumuz</h2>
            <p className="text-gray-700">
              Modern tarım teknolojilerini kullanarak, sektörde öncü ve yenilikçi
              bir işletme olmak, sürdürülebilir tarım uygulamalarıyla örnek
              teşkil etmek.
            </p>
          </div>
        </div>

        {/* Tarihçe */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-center mb-8">Tarihçemiz</h2>
          <div className="space-y-8">
            <div className="flex items-center gap-8">
              <div className="w-32 text-right font-semibold">2003</div>
              <div className="flex-1 bg-gray-50 p-6 rounded-lg">
                İşletmemizin kuruluşu ve ilk tarım arazilerimizin edinilmesi
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="w-32 text-right font-semibold">2008</div>
              <div className="flex-1 bg-gray-50 p-6 rounded-lg">
                Modern sulama sistemlerine geçiş ve üretim kapasitesinin artırılması
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="w-32 text-right font-semibold">2015</div>
              <div className="flex-1 bg-gray-50 p-6 rounded-lg">
                Organik tarım sertifikasyonu ve yeni ürün çeşitlerinin eklenmesi
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="w-32 text-right font-semibold">2020</div>
              <div className="flex-1 bg-gray-50 p-6 rounded-lg">
                Akıllı tarım teknolojilerinin entegrasyonu ve AR-GE çalışmalarının başlaması
              </div>
            </div>
          </div>
        </div>

        {/* Değerlerimiz */}
        <div>
          <h2 className="text-3xl font-semibold text-center mb-8">Değerlerimiz</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const values = [
  {
    title: 'Sürdürülebilirlik',
    description: 'Doğal kaynakları koruyarak gelecek nesillere aktarmak',
    icon: function LeafIcon(props: SVGProps<SVGSVGElement>) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
          />
        </svg>
      )
    },
  },
  {
    title: 'Kalite',
    description: 'En yüksek standartlarda üretim ve hizmet sunumu',
    icon: function StarIcon(props: SVGProps<SVGSVGElement>) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
      )
    },
  },
  {
    title: 'İnovasyon',
    description: 'Modern teknolojiler ile sürekli gelişim',
    icon: function LightBulbIcon(props: SVGProps<SVGSVGElement>) {
      return (
        <svg
          {...props}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
          />
        </svg>
      )
    },
  },
] 