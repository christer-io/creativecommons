import Link from "next/link"


function BannerSmall({ textPart1, textPart2, textPart3 }) {
  return (
  <div className="text-center bg-white pb-8">
    
    <div className=" bg-white flex justify-between mt-10 mb-10 items-center text-blue-900 border-black py-10 lg:py-0">
      <h1 className="text-4xl max-w-xl font-serif text-center mx-auto">
        <span className="decoration-4 "> {textPart1} <span className="text-blue-500"> {textPart2} </span> {textPart3}
        </span>{" "} 
      </h1> 
    </div>
    
  </div>
  
  )
}

export default BannerSmall