import Image from 'next/image';

function PathStarter({titlePart1, button, buttonUrl, description, image}) {
    
    return (
      <div className='pb-20 bg-gray-50 min-w-full h-full'>
        <section className="bg-gray-50 "> 
            <div className="bg-gray-50 flex flex-1 flex-col py-8 px-4 mx-auto items-center  max-w-screen-xl text-center ">
                 <Image className="rounded-3xl "
                    width={500}
                    height={500} 
                    src={image} 
                    alt={titlePart1} /> 
                <h1 className="pb-3 text-2xl pt-6 font-extrabold tracking-tight leading-none text-black md:text-3xl lg:text-4xl pl-10 pr-10"> <span className='text-blue-900'>{titlePart1}</span> </h1>
                
                <p className="pb-3 max-w-2xl text-black">{description}</p>
                <p className="pb-3 max-w-3xl text-black text-xl">May the <span className='text-blue-900'>Open Source</span> be with you!</p>
                <div className="pb-20 pt-2 flex flex-col space-y-4  md:justify-center  ">
                    <a href={buttonUrl} className=" inline-flex border border-white justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-900 hover:bg-blue/80  ">
                        {button}
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                      
                </div>
            </div>
        </section>
      </div>
    )
  }
  
  export default PathStarter
