import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    const openNav = () => {
        const mySidebar = document.getElementById("mySidebar");
        const main = document.getElementById("main");

        if (mySidebar && main) {
            mySidebar.style.width = "250px";
            main.style.marginLeft = "250px";
        }
    }

    const closeNav = () => {
        const mySidebar = document.getElementById("mySidebar");
        const main = document.getElementById("main");

        if (mySidebar && main) {
            mySidebar.style.width = "0";
            main.style.marginLeft = "0";
        }
    }
    return (
        <>
            <nav className="bg-white py-2 md:py-4 dark:bg-slate-900">
                <div className="container px-4 mx-auto md:flex md:items-center">

                    <div className="flex justify-start items-center gap-3">
                        <button className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden dark:text-white" id="navbar-toggle" onClick={openNav}>
                            ☰
                        </button>
                        <Link href="#" className="font-bold text-xl text-purple-600">B2BUY</Link>
                    </div>

                    <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
                        <Link href="#" className="p-2 lg:px-4 md:mx-2 text-white rounded bg-purple-600">Home</Link>
                        <Link href="#" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 dark:text-white">Products</Link>
                        <Link href="#" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 dark:text-white">Cart</Link>
                        <Link href="#" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300 dark:text-white">Contact</Link>
                        <Link href="/" className="p-2 lg:px-4 md:mx-2 text-purple-600 text-center border border-solid border-purple-600 rounded hover:bg-purple-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1">Logout</Link>
                    </div>
                </div>
                <div className="font-sans">
                    <div id="mySidebar" className="sidebar fixed top-0 left-0 bg-gray-900 h-screen w-0 z-50 overflow-x-hidden transition-all duration-500">
                        <Link href="javascript:void(0)" className="closebtn text-white absolute top-0 right-4 text-3xl mt-4" onClick={closeNav}>&times;</Link>
                        <div className='pl-3 pt-10'>
                            <Link href="#" className="block text-gray-300 py-2 pl-4 hover:text-white">Home</Link>
                            <Link href="#" className="block text-gray-300 py-2 pl-4 hover:text-white">Products</Link>
                            <Link href="#" className="block text-gray-300 py-2 pl-4 hover:text-white">Contact</Link>
                            <Link href="/" className="block text-gray-300 py-2 pl-4 hover:text-white">Logout</Link>
                        </div>
                    </div>

                    <div id="main" className="transition-all duration-500 ml-0">
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
