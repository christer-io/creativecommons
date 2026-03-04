
type Props = {
  title: string;
  url: string;
  description: string;
 
}

function ExternalLink({title, url, description}: Props) {

  return (
            
            <div className="border text-slate-700 hover:text-blue-600 border-gray-200 rounded-lg group cursor-pointer overflow-hidden">
                <div className="flex justify-between p-3 bg-white">
                    <div>
                      <p className="text-lg text-left text-blue-900">{title}</p> 
                      <p className="text-sm">{description}</p>
                    </div>
                </div>
               <p className="text-lg pt-5 pr-4 pb-3 text-right">&rarr;</p> 
            </div>   
            
  )
}
export default ExternalLink