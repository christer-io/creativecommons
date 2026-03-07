import { Header } from "@/components/Header";
import { notFound } from "next/navigation";
import { resourceUrls } from "@/data/resourceUrls";

export const runtime = "edge";


// fetching data
async function Resource({params}: {
    params: Promise<{id: string}>
}) 
{
const { id } = await params;
const resource = resourceUrls.find((item) => item.id === id);
if (!resource?.source) notFound();

return (
    <div className='bg-white text-black'>
        <Header />
        <div className="h-screen max-w-3xl mx-auto pb-9">
            <iframe className="h-full w-full pt-3" src={resource.source}  title="Creative Commons"></iframe> 
        </div> 
        
    </div>
)
}

export default Resource
