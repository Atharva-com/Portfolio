"use client"
import Layout from '@/components/Layout'
import './globals.css'
import { Inter } from 'next/font/google'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Transition from '@/components/Transition'

export default function RootLayout({ children }) {
  const pathname = usePathname()
  const [url, seturl] = useState(`${pathname}`)
  useEffect(() => {
    seturl(`${pathname}`)
  }, [pathname])
  return (
    <html lang="en">
      <body>
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
