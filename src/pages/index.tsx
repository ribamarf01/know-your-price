import Head from 'next/head'

import Hero from '@components/Hero'

const Home = () => {
  return (<>
    <Head>
      <title>Know your price! - Home</title>
    </Head>
    <Hero />
  </>)
}

export default Home