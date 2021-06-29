import { AppProps } from 'next/app'
import { UserProvider } from '@auth0/nextjs-auth0'
import 'tailwindcss/tailwind.css'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  )
}

export default App
