import Header from '@/components/landing/Header'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-poppins">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
    </div>
  )
}
