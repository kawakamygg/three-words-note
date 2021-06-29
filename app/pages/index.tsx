import { gql } from '@apollo/client'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import client from '../utils/apollo/client'

const LANGUAGES = gql`
  query {
    languages {
      code
      name
    }
  }
`

type Language = {
  code: number
  name: string
}

type Props = {
  languages: Language[]
}

const Home: React.FC<Props> = ({ languages }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/api/auth/login">
        <a>Login</a>
      </Link>
      <Link href="/api/auth/logout">
        <a>Logout</a>
      </Link>
      <Link href="/profile">
        <a>Profile</a>
      </Link>
      <ul>
        {languages.map((language) => (
          <li key={language.code}>{language.name}</li>
        ))}
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await client.query({
    query: LANGUAGES,
  })
  const languages = data.languages
  return {
    props: { languages },
    revalidate: 15,
  }
}

export default Home
