import { AppProps } from 'next/app';
import '../styles/global.css'

// App component is the top-level component which will be common across all the different pages.
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps}/>
}