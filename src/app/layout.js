"use client"
import Layout from '@/components/Layout'
import './globals.css'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Transition from '@/components/Transition'
<<<<<<< HEAD
import { useEffect, useState } from 'react'
=======
>>>>>>> 10e6c3e8505b21425a9d1c18b8b0a3fb0ace50ce

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
