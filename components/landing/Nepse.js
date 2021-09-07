import React, { useState } from 'react'
import Hero from './Hero'

export default function Nepse() {

  return (
    <div className="w-full max-w-6xl mx-auto relative">
      <div className="absolute h-36 w-36 top-0 rounded-full bg-cyan-300"></div>
      <div className="absolute h-6 w-6 top-36 rounded-full bg-cyan-300"></div>
      <div className="absolute w-full justify-center items-center py-6">
        <div className="bg-white backdrop-blur-lg bg-opacity-60 rounded-lg h-96 max-w-5xl mx-auto flex flex-col space-y-6 shadow justify-center items-center">
          <Hero/>
        </div>
      </div>
    </div>
  )
}

// export async function getStaticProps() {
//   const res = await fetch(API,{
//     method: "GET",
//     headers: {
//       "access-control-allow-origin": "*",
//       "Content-type": "application/json; charset=UTF-8"
//     }
//   })
//   const data = await res.json()
//   console.log(data)
//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       data:data
//     },
//     revalidate: 100,
//   }
// }
