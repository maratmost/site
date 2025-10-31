'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import { getImagePath } from '@/lib/paths'

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 sm:pt-20 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-primary"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 sm:gap-y-16 gap-x-12 items-center">
          {/* Left Column - Photo */}
          <div className="flex justify-center lg:justify-start items-center">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl aspect-square rounded-3xl overflow-hidden shadow-2xl">
              {/* Glow background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 blur-2xl -z-10"></div>
              <Image
                src={getImagePath("/photo.png")}
                alt="Developer"
                width={800}
                height={800}
                className="w-full h-full object-cover relative z-10"
                priority
              />
            </div>
          </div>

          {/* Right Column - Apps Screenshots Carousel */}
          <div className="flex flex-col items-center">
            <div className="relative h-[400px] sm:h-[500px] lg:h-[650px] mb-4 sm:mb-6 flex items-center justify-center w-full overflow-hidden px-4 sm:px-6 md:px-8">
              {/* Glow background for app previews */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 blur-3xl -z-10"></div>
              {[
                { file: 'IMG_5660.PNG', translateX: -160, translateXMobile: -50, zIndex: 1 },
                { file: 'Словари3.jpg', translateX: -80, translateXMobile: -25, zIndex: 2 },
                { file: 'screenshot-3.jpg', translateX: 0, translateXMobile: 0, zIndex: 3 },
                { file: 'IMG_5660.PNG', translateX: 80, translateXMobile: 25, zIndex: 4 },
                { file: 'Словари3.jpg', translateX: 160, translateXMobile: 50, zIndex: 5 },
              ].map((screenshot, index) => (
                <div
                  key={index}
                  className="absolute w-24 sm:w-32 md:w-40 lg:w-48 xl:w-56 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl transition-all duration-300 hover:scale-110 hover:z-50"
                  style={{
                    transform: `translateX(${isMobile ? screenshot.translateXMobile : screenshot.translateX}px)`,
                    zIndex: screenshot.zIndex,
                  }}
                >
                  <Image
                    src={getImagePath(`/${screenshot.file}`)}
                    alt={`App screenshot ${index + 1}`}
                    width={240}
                    height={426}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <Button variant="primary" className="px-8 sm:px-12 text-sm sm:text-base -mt-2 sm:-mt-4">
              Подробнее
            </Button>
          </div>
        </div>

        {/* Offer Box - Below both columns */}
        <div className="max-w-4xl mx-auto text-center mt-12 sm:mt-16 px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Разработка приложений под ключ
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto">
          Публикую в App Store и Google Play, фиксирую сроки и стоимость, веду до результата. 
            <br className="hidden sm:block" />
            <strong className="text-white">Современный дизайн, чистый код и гарантия качества.</strong> 
          </p>
        </div>
      </div>
    </section>
  )
}
