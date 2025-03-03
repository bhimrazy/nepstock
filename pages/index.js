import Header from '@/components/landing/Header'
import Main from '@/components/landing/Main'
import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col font-poppins bg-white">
      <Head>
        <title>NepStock | Nepal Share Market Portal</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <div className="absolute bg-green-200/60 h-60 w-60 top-6 -left-40 rounded-full"></div>
      <Main/>
    </div>
  )
}
