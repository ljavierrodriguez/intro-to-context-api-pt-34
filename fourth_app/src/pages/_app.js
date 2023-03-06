import injectContext from '@/store/AppContext'
import '@/styles/globals.css'

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default injectContext(App);