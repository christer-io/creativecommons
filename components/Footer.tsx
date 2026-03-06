export function Footer() {
    const signalGroupUrl =
      "https://signal.group/#CjQKICNZFlK2RTBSgZQdtdLr8O4spTFJmtwxUvkvAO_4euIREhDdmw_dl4v_bI8jGJdENotM";

    return (
      <div className="bg-slate-700 text-white  ">
        <div className="pb-2 pt-12 ">
            <h1 className="text-3xl cursor-pointer font-sans font-bold text-white text-center ">Creative <span className="text-blue-500">Commons Norge</span></h1>                 
        </div>   
        <div className="text-center">
            <h2 className="text-center pb-3">Med mindre annet er eksplisitt angitt, er alt av innhold på dette nettstedet tilgjengelig under en <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Navngivelse 4.0 Internasjonal lisens.</a></h2>
            <div className="pb-4">
              <a
                href={signalGroupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto inline-flex items-center gap-2 rounded-full bg-[#3A76F0] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#2F65D3]"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2.5c5.5 0 10 3.95 10 8.82 0 2.44-1.1 4.65-2.88 6.26l.6 3.92-3.86-1.2A11.2 11.2 0 0 1 12 20.14c-5.5 0-10-3.95-10-8.82S6.5 2.5 12 2.5Z"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.7 11.6c.67.86 1.58 1.5 2.67 1.93 1.1.43 2.2.53 3.35.3"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
                Bli med i vår Signal-gruppe
              </a>
            </div>
            <h3 className="text-center pb-12">Dette nettstedet lagring ingen persondata..</h3>
      
        </div>
      </div>
    )
  }
