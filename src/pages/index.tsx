import Head from 'next/head'

import Hero from '@components/Hero'
import Pricing from '@components/Pricing'

const Home = () => {
  return (<>
    <Head>
      <title>Home</title>
    </Head>

    <Hero />
    <Pricing />
  </>)
}

export default Home