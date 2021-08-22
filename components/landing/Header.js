import Image from 'next/image'
import nepstockLogo from '../../public/nepstock-logo.svg'

export default function Header() {
    return (
        <header className="w-full bg-gray-50">
            <nav className="max-w-7xl mx-auto w-full flex flex-row justify-between items-center py-5">
                <div className="">
                    <Image
                        className=""
                        src={nepstockLogo}
                        alt="NepStock Logo"
                        placeholder="blur"
                        height={40}
                        width={125}
                        blurDataURL={nepstockLogo}
                        loading="eager"
                    />
                </div>
                <ul className="hidden lg:flex flex-row space-x-6 items-center capitalize text-gray-800 font-medium">
                    <li className="cursor-pointer hover:text-indigo-800">Home</li>
                    <li className="cursor-pointer hover:text-indigo-800">How it Works</li>
                    <li className="cursor-pointer hover:text-indigo-800">FAQs</li>
                    <li className="cursor-pointer hover:text-indigo-800">Contact</li>
                </ul>
                <button className=" capitalize focus:outline-none bg-gray-800 hover:bg-gray-800/95 items-center rounded-full px-4 py-2 text-sm tracking-wider text-blue-100 font-medium">sign up</button>
            </nav>
        </header>
        
    )
}
