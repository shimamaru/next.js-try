import '@/styles/globals.css'
import { Inter, Montserrat } from 'next/font/google'
import NavBar from '@/components/NavBar'
import Logo from '@/components/Logo'

const montserrat = Montserrat({ subsets: ['latin'] ,variables: "--font-mont",}
)


export default function App({ Component, pageProps }) {
  return (
    <>
      <main>
        <NavBar />
        <Logo/>
        <Component {...pageProps} />
        
      </main>
    </>
  )
}

// className={`${inter.variables} font-mont`} 