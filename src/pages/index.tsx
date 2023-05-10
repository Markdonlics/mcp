import { Inter } from 'next/font/google'
import { HeroImage, ServiceCard } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <HeroImage />
      <ServiceCard />
    </div>
  )
}
