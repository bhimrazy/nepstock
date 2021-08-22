import React from "react";

export default function Main() {
    return (
        <main className="w-full">
            {/* Hero - Section */}
            <section className="max-w-7xl mx-auto w-full flex flex-col items-center space-y-10 min-h-screen">
                <div className="pt-36 items-center space-y-4 text-center">
                    <div className="flex flex-row space-x-2 justify-center items-center">
                        <svg class="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clip-rule="evenodd"></path></svg>
                        <span className="text-gray-800 tracking-wide text-lg">
                            we keep the terms simple
                        </span>
                    </div>
                    <h1 className="text-5xl font-bold text-gray-900 leading-tight max-w-2xl">
                        Make your life easier by Online Trading
                    </h1>
                </div>
                <div className="flex flex-row space-x-4">
                    <button className=" capitalize flex flex-row space-x-1 focus:outline-none bg-blue-600 hover:bg-blue-600/95 items-center rounded-full px-6 py-3 text-base tracking-wider text-white font-medium">
                        <span>see all features</span>{" "}
                        <svg
                            class="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </button>
                    <button className=" capitalize flex flex-row space-x-1 focus:outline-none bg-gray-800 hover:bg-gray-800/95 items-center rounded-full px-6 py-3 text-base tracking-wider text-white font-medium">
                        <span>start free trail</span>{" "}
                        <svg
                            class="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>
                {/* Nepse Index */}
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
            </section>
        </main>
    );
}
