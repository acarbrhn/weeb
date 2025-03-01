'use client'

import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Anasayfa', href: '/' },
  { 
    name: 'Kurumsal',
    href: '/kurumsal',
    submenu: [
      { name: 'HAKKIMIZDA', href: '/hakkimizda' },
      { name: 'KALİTE', href: '/kalite' },
      { name: 'MAKALELER', href: '/makaleler' },
      { name: 'KVKK', href: '/kvkk' },
    ]
  },
  { 
    name: 'ÜRÜNLER',
    href: '/urunler',
    submenu: [
      { name: 'ZEYTİNYAĞI', href: '/urunler/zeytinyagi' },
      { name: 'ZEYTİN', href: '/urunler/zeytin' },
      { name: 'BÜYÜKBAŞ', href: '/urunler/buyukbas' },
    ]
  },
  { 
    name: 'HİZMETLERİMİZ',
    href: '/hizmetler',
    submenu: [
      { name: 'KURBANLIK SATIŞI', href: '/hizmetler/kurbanlik-satisi' },
      { name: 'ARAZİ TESVİYE', href: '/hizmetler/arazi-tesviye' },
    ]
  },
  { name: 'İletişim', href: '/iletisim' },
]

export default function Header() {
  const pathname = usePathname()

  return (
    <header className="bg-white">
      {/* Üst Bilgi Çubuğu */}
      <div className="bg-green-800 text-white py-2">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="tel:+905357431472" className="text-sm hover:text-green-200">
              +90 535 743 14 72
            </a>
            <a href="mailto:info@acartarim.com" className="text-sm hover:text-green-200">
              info@acartarim.com
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Link href="/tr" className="text-sm hover:text-green-200">TR</Link>
            <span>|</span>
            <Link href="/en" className="text-sm hover:text-green-200">EN</Link>
          </div>
        </div>
      </div>

      {/* Ana Menü */}
      <Disclosure as="nav" className="border-b">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-20 justify-between items-center">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <Link href="/" className="flex items-center">
                    <img
                      src="/images/logo.png"
                      alt="Acar Tarım Logo"
                      className="h-16 w-auto"
                    />
                  </Link>
                </div>

                {/* Desktop Menü */}
                <div className="hidden md:flex md:space-x-8">
                  {navigation.map((item) => (
                    <div key={item.name} className="relative group">
                      <Link
                        href={item.href}
                        className={`text-base font-medium ${
                          pathname === item.href
                            ? 'text-green-800'
                            : 'text-gray-700 hover:text-green-800'
                        } py-2`}
                      >
                        {item.name}
                      </Link>
                      {item.submenu && (
                        <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg mt-2 py-2 rounded-md">
                          {item.submenu.map((subitem) => (
                            <Link
                              key={subitem.name}
                              href={subitem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-800"
                            >
                              {subitem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobil Menü Butonu */}
                <div className="md:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-800 hover:bg-green-50">
                    <span className="sr-only">Menüyü aç</span>
                    {open ? (
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            {/* Mobil Menü */}
            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <Fragment key={item.name}>
                    <Disclosure.Button
                      as={Link}
                      href={item.href}
                      className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-800 hover:bg-green-50 rounded-md"
                    >
                      {item.name}
                    </Disclosure.Button>
                    {item.submenu && (
                      <div className="pl-4">
                        {item.submenu.map((subitem) => (
                          <Disclosure.Button
                            key={subitem.name}
                            as={Link}
                            href={subitem.href}
                            className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-green-800 hover:bg-green-50 rounded-md"
                          >
                            {subitem.name}
                          </Disclosure.Button>
                        ))}
                      </div>
                    )}
                  </Fragment>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </header>
  )
} 