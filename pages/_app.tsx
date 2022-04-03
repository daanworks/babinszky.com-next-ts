import '../styles/globals.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { AppProps } from 'next/app'
import { useEffect, useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return <div><Component {...pageProps} /></div>
}

export default MyApp
