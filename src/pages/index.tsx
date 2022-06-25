import Head from 'next/head'

import Hero from '@components/Hero'
import Pricing from '@components/Pricing'
import Support from '@components/Support'
import Footer from '@components/Footer'

const Home = () => {
  return (<>
    <Head>
      <title>Know your price</title>
    </Head>

    <Hero />
    <Pricing />
    <Support />
    <Footer />
  </>)
}

export default Home