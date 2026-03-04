import MarkdownRenderer from "./MarkdownRenderer";

type Props = {
    body: string;
   
  }

function BodyText({body}: Props) {
  return (
    <div>
        <div className=" mx-auto">
            
            <div className="p-3 max-w-3xl mx-auto">
            <MarkdownRenderer markdown={body} />
               
            </div>
        </div>
    </div>
  )
}

export default BodyText
