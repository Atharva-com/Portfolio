import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Sora } from 'next/font/google'
import TopLeftImg from './TopLeftImg'
import Nav from './Nav'
import Header from './Header'
import LoadingBar from 'react-top-loading-bar'


const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

const Layout = ({children}) => {
  const [progress, setProgress] = useState(30)
  const pathname = usePathname()
  useEffect(() => {
      setProgress(100)
  }, [pathname])

  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
      <LoadingBar
        color='#f11946'
        progress={progress}
        loaderSpeed={800}
        waitingTime={500}
        ClassName='shadow-5xl shadow-red-400'
        onLoaderFinished={() => setProgress(0)}
      />
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  )
}

export default Layout
