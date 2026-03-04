function Header() {
    return (
      <div className="">
        <header>
            <nav className=" border-gray-200 px-4 lg:px-6 py-2.5 bg-gray-200 ">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl ">
                    <a href="/" className="flex items-center">
                        <span className="self-center text-xl font-semibold whitespace-nowrap text-[#4D8FE4]">Creative</span>
                        <span className="self-center text-xl font-semibold whitespace-nowrap text-slate-700"> Commons.no</span>
                    </a>
                
                    <div className="flex items-center lg:order-2">
                        <a href="/" className="text-slate-700 font-medium rounded-lg text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-gray-700 focus:outline-none focus:ring-gray-800"></a>
                    </div>
                    <div className="hidden justify-between text-slate-700 items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 pt-2 pb-2">
                            <li>
                                <a href="/post/kreditering" className="text-sm block py-2 pr-4 pl-3 rounded bg-blue-700 lg:bg-transparent  lg:p-0" aria-current="page">Kreditering</a>
                            </li>
                            <li>
                                <a href="/post/norske-lisenser-og-verktoy" className="text-sm block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Lisenser</a>
                            </li>
            
                            <li>
                                <a href="/post/kontakt" className="text-sm block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Kontakt oss</a>
                            </li>
                            <li>
                                <a href="https://creativecommons.org" className="text-sm block py-2 pr-4 pl-3 rounded bg-blue-700 lg:bg-transparent  lg:p-0" aria-current="page">CreativeCommons.org</a>
                            </li>
                            
                    
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
      </div>
    )
  }
  
  export default Header