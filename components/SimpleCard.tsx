


type Props = {
  title: string;
  url: string;
  description: string;
  tag: string;
  bg: string;
  text: string;
}

export function SimpleCard({title, url, description, tag, bg, text}: Props) {

  return (
            
            <div className={`h-full border ${bg} ${text} hover:bg-blue-200/80 hover:text-black border-blue-500/50 rounded-lg group cursor-pointer overflow-hidden flex flex-col justify-between`}>
                <div className="flex justify-between p-3">
                    <div>
                    <p className="text-lg text-left">{title}</p> 
                     <p className="pt-1 text-blue-900">{tag}</p>
                    </div>
                </div>
               <p className="text-lg pt-5 pr-4 pb-3 text-right">&rarr;</p> 
            </div>   
            
  )
}
