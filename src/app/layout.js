"use client"
import Layout from '@/components/Layout'
import './globals.css'
import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Transition from '@/components/Transition'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
              <ToastContainer
                position="top-left"
                autoClose={4000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                theme="dark"
              />
              {children}
            </motion.div>

          </AnimatePresence>
        </Layout>
      </body>
    </html>
  )
}
