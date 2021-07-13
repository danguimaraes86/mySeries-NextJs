import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

import Head from 'next/head'
import Navbar from '../components/Navbar'
import AuthenticationModal from '../components/AuthenticationModal'

export default function MyApp({ Component, pageProps }) {
  return (
    <div className='container bg-gray'>
      <Head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css' />
        <link rel='icon' href='/favicon.ico' />
        <title>mySeries</title>
      </Head>

      <Navbar />
      <AuthenticationModal />

      <Component {...pageProps} />

      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous" />
    </div>
  )
}