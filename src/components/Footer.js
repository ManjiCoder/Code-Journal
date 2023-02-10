import React from 'react'

function Footer({title}) {
  return (
    
<footer className="p-4 bg-white sm:p-6 dark:bg-gray-900">
    <div className="md:flex md:justify-between">
        <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" rel="noreferrer" target="_blank" className="flex items-center">
            <span className='font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>{title}</span>
                
            </a>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                    <li className="mb-4">
                        <a href="https://reactjs.org/" rel="noreferrer" target='_blank' className="hover:underline">React</a>
                    </li>
                    <li>
                        <a href="https://tailwindcss.com/" rel="noreferrer" target='_blank' className="hover:underline">Tailwind CSS</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                    <li className="mb-4">
                        <a href="https://github.com/ManjiCoder/Code-Journal" rel="noreferrer" target='_blank' className="hover:underline ">Github</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                <ul className="text-gray-600 dark:text-gray-400">
                    <li className="mb-4">
                        <a href="#" className="hover:underline">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
    <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
        </span>
    </div>
</footer>

  )
}

export default Footer