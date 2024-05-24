import '@/styles/globals.css'
import type { AppProps } from 'next/app'

const Header = () => {
  return <h1 className='text-3xl'>Header</h1>
}
const Footer = () => {
  return <h1 className='text-3xl'>Footer</h1>
}
export default function App({ Component, pageProps }: AppProps) {
  console.log((Component as any).getTitle)
  console.log(pageProps)
  if (!!(Component as any).render) {
    return (Component as any).render()
  } else
    return (
      <div>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    )
}
