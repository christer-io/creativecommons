
import Link from 'next/link';


function License({source, license}) {
  let url = "";
  if(license == "CC-BY-SA-4.0"){
    license = "Attribution-ShareAlike 4.0 International (CC BY-SA 4.0)"
    url = "https://creativecommons.org/licenses/by-sa/4.0/"

  }
  else if(license == "CC-BY-4.0"){
    license = "Attribution 4.0 International (CC BY 4.0)"
    url = "https://creativecommons.org/licenses/by/4.0/"
  }
  else if(license == "CC-BY-NC-4.0"){
    license = "Attribution-NonCommercial 4.0 International (CC BY-NC 4.0)"
    url = "https://creativecommons.org/licenses/by-nc/4.0/"
  }
  else if(license == "CC-BY-NC-SA-4.0"){
    license = "Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)"
    url = "https://creativecommons.org/licenses/by-nc-sa/4.0/"
  }
  else{
    license = "License not defined"
    url = "https://obione.io"
  }

  
    return (
      <Link key={license} href={url}> 
        <div className="border text-white border-gray-200 rounded-lg group cursor-pointer overflow-hidden ">
          <div className="flex justify-between p-5 bg-white">
            <div>
              <p className="text-sm text-black text-left">Source: {source}</p>
              <p className="text-sm text-black pt-2 text-left">License: {license}</p>      
            </div>
          </div>
        </div>
      </Link> 
      
    )
  }

  export default License

