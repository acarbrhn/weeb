'use client'

import { useState } from 'react'
import Image from 'next/image'

// Geçici ürün verisi
const products = [
  {
    id: 1,
    name: 'Organik Domates',
    category: 'Sebzeler',
    price: '- ₺/kg',
    description: 'Doğal yöntemlerle yetiştirilen taze domates',
    image: '/images/products/tomato.jpg',
  },
  {
    id: 2,
    name: 'Taze Salatalık',
    category: 'Sebzeler',
    price: '- ₺/kg',
    description: 'Serada özenle yetiştirilen salatalık',
    image: '/images/products/cucumber.jpg',
  },
  {
    id: 3,
    name: 'Çilek',
    category: 'Meyveler',
    price: '- ₺/kg',
    description: 'Taze ve doğal çilek',
    image: '/images/products/strawberry.jpg',
  },
  // Daha fazla ürün eklenebilir
]

const categories = ['Tümü', 'Sebzeler', 'Meyveler', 'Tahıllar']

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tümü')

  const filteredProducts = selectedCategory === 'Tümü'
    ? products
    : products.filter(product => product.category === selectedCategory)

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Ürünlerimiz</h1>
        
        {/* Kategori Filtreleme */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Ürün Listesi */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-80">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <span className="text-green-600 font-medium">
                    {product.price}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
                  {product.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 