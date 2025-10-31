import Navbar from '@/components/layout/Navbar'
import Hero from '@/components/sections/Hero'
import Portfolio from '@/components/sections/Portfolio'
import About from '@/components/sections/About'
import Journey from '@/components/sections/Journey'
import Blog from '@/components/sections/Blog'
import Contacts from '@/components/sections/Contacts'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Portfolio />
      <About />
      <Journey />
      <Blog />
      <Contacts />
    </main>
  )
}

