import Head from 'next/head'

import Hero from '@components/Hero'
import Pricing from '@components/Pricing'
import Support from '@components/Support'

const Home = () => {
  return (<>
    <Head>
      <title>Home</title>
    </Head>

    <Hero />
    <Pricing />
    <Support />
  </>)
}

export default Home