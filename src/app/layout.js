"use client"
import Layout from '@/components/Layout'
import './globals.css'
import { Inter } from 'next/font/google'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Transition from '@/components/Transition'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Atharva.Portfolio',
  description: 'A Fine Description of Atharva',
}

export default function RootLayout({ children }) {
  const pathname = usePathname()
  const [url, seturl] = useState(`${pathname}`)
  useEffect(() => {
    seturl(`${pathname}`)
  }, [pathname])
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>
          <AnimatePresence mode='wait'>

          <motion.div key={url} className='h-full'>
            <Transition />
            { children }
          </motion.div>

          </AnimatePresence>
        </Layout>
      </body>
    </html>
  )
}
