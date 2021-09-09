import React from 'react'
import useSWR from 'swr'
const API = 'https://nepstock-fastapi.herokuapp.com/api/nepstock'
const fetcher = (...args) => fetch(...args, {
    method: "GET",
    headers: {
        "access-control-allow-origin": "*",
        "Content-type": "application/json; charset=UTF-8"
    }
}).then(res => res.json())


export default function Hero() {
    const { data, error } = useSWR(API, fetcher,{ refreshInterval: 100 })

    if (!data) return <h2 className="font-semibold text-gray-500 text-normal">Loading ...</h2>

    return (
        <>
            <div className="text-center">
                <h2 className="font-semibold text-gray-500 text-normal">
                    NEPSE Index
                </h2>
                <span className="font-bold text-blue-600 text-6xl">
                    {data?.data?.index}
                </span>
            </div>
            {data && <div className="space-y-2 flex flex-col text-center">
                <h3 className="font-semibold text-gray-600 text-xl py-2">
                    {data.data.records[0].head[0]}
                </h3>
                {
                    data.data.records[0].body.map((d,i)=>(
                        <div key={i} className="grid grid-cols-2 gap-8">
                            <span className="text-left text-gray-700">{d[0]}</span>
                            <span className="text-right text-indigo-700">{d[1]}</span>
                        </div>
                    ))
                }

            </div>
            }

        </>
    )
}
