import '@/styles/globals.css'
import {Inter, Montserrat} from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] ,variables: "--font-mont",}
)


export default function App({ Component, pageProps }) {
  return (
    <>
      <main ></main>
      <Component {...pageProps} />
    </>
  )
}

// className={`${inter.variables} font-mont`} 