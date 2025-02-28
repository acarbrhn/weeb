'use client'

import { useEffect } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

interface MapProps {
  center: [number, number]
  zoom: number
}

export default function Map({ center, zoom }: MapProps) {
  useEffect(() => {
    // Leaflet CSS'ini global olarak import et
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
    document.head.appendChild(link)

    // Haritayı başlat
    const map = L.map('map').setView(center, zoom)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map)

    // Marker ekle
    const marker = L.marker(center).addTo(map)
    marker.bindPopup('<b>Tarım İşletmesi</b><br>Bizi burada bulabilirsiniz.').openPopup()

    // Cleanup
    return () => {
      map.remove()
      document.head.removeChild(link)
    }
  }, [center, zoom])

  return <div id="map" className="h-full w-full rounded-lg" />
} 