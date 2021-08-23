import React from 'react'

export default function Nepse({posts}) {
    return (
        <div className="w-full max-w-6xl mx-auto relative">
            <div className="absolute h-36 w-36 top-0 rounded-full bg-cyan-300"></div>
            <div className="absolute h-6 w-6 top-36 rounded-full bg-cyan-300"></div>
            <div className="absolute w-full justify-center items-center py-6">
                <div className="bg-white backdrop-blur-lg bg-opacity-60 rounded-lg h-48 max-w-5xl mx-auto flex flex-col space-y-1 shadow justify-center items-center">
                    {/* <h2 className="font-semibold text-gray-500 text-normal">
                                NEPSE Index
                            </h2>
                            <span className="font-bold text-blue-600 text-6xl">
                                3180
                            </span> */}
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://newweb.nepalstock.com/api/nots/nepse-index')
    const posts = await res.json()
  console.log(posts)
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
      },
    }
  }
  