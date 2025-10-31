'use client'

import Image from 'next/image'
import Button from '@/components/ui/Button'

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-primary"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-16 gap-x-12 items-center">
          {/* Left Column - Photo */}
          <div className="flex justify-center lg:justify-start items-center">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl aspect-square rounded-3xl overflow-hidden shadow-2xl">
              {/* Glow background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 blur-2xl -z-10"></div>
              <Image
                src="/photo.png"
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
            <div className="relative h-[500px] lg:h-[650px] mb-8 flex items-center justify-center">
              {/* Glow background for app previews */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 blur-3xl -z-10"></div>
              {[
                { file: 'IMG_5660.PNG', translateX: -200, zIndex: 1 },
                { file: 'Словари3.jpg', translateX: -100, zIndex: 2 },
                { file: 'screenshot-3.jpg', translateX: 0, zIndex: 3 },
                { file: 'IMG_5660.PNG', translateX: 100, zIndex: 4 },
                { file: 'Словари3.jpg', translateX: 200, zIndex: 5 },
              ].map((screenshot, index) => (
                <div
                  key={index}
                  className="absolute w-40 md:w-48 lg:w-56 xl:w-64 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:scale-110 hover:z-50"
                  style={{
                    transform: `translateX(${screenshot.translateX}px)`,
                    zIndex: screenshot.zIndex,
                  }}
                >
                  <Image
                    src={`/${screenshot.file}`}
                    alt={`App screenshot ${index + 1}`}
                    width={240}
                    height={426}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <Button variant="primary" className="px-12">
              Подробнее
            </Button>
          </div>
        </div>

        {/* Offer Box - Below both columns */}
        <div className="max-w-4xl mx-auto text-center mt-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Разработка приложений под ключ
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
            Превращаю вашу идею в рабочее приложение и публикую в App Store и Google Play. 
            <br className="hidden md:block" />
            <strong className="text-white">Современный дизайн, чистый код и гарантия качества.</strong> 
          </p>
        </div>
      </div>
    </section>
  )
}
