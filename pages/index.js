import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Hero from '@/components/Hero'
import { Slider } from '@/components/Slider'
import { SliderData } from '@/components/SliderData'
import { Github } from '@/components/Github'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>

      <Head>
        <title>Landing Page</title>
      </Head>

      <Hero heading="Hey! I'm Alex." message='Im a Student/Developer in Grand Rapids/Michigan' />
      <Slider slides={SliderData} />
      <Github />
    </div>)
}