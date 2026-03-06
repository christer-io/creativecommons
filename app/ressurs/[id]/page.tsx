import { Header } from "@/components/Header";
import { NotFound } from '@/components/NotFound';
import { getAllMarkdownPosts, getMarkdownPostBySlug } from "@/lib/content";

export async function generateStaticParams() {
  const posts = await getAllMarkdownPosts();
  return posts
    .filter((post) => Boolean(post.source))
    .map((post) => ({ id: post.slug.current }));
}


// fetching data
async function Resource({params}: {
    params: Promise<{id: string}>
}) 
{
const { id } = await params;
const myPost = await getMarkdownPostBySlug(id);
const resourceUrl = myPost?.source || "";
if (!myPost || !resourceUrl) {
    // returning 404 page
    return <div>
        <NotFound />
    </div>
  }
return (
    <div className='bg-white text-black'>
        <Header />
        <div className="h-screen max-w-3xl mx-auto pb-9">
            <iframe className="h-full w-full pt-3" src={resourceUrl}  title="Creative Commons"></iframe> 
        </div> 
        
    </div>
)
}

export default Resource
