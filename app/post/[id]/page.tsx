import NotFound from "@/components/NotFound"
import Header from "../../../components/Header"
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { getAllMarkdownPosts, getMarkdownPostBySlug } from "@/lib/content";

export async function generateStaticParams() {
  const posts = await getAllMarkdownPosts();
  return posts.map((post) => ({ id: post.slug.current }));
}

  async function Post({params}: {
    params: Promise<{id: string}>
})  {
    const { id } = await params;
    const myPost = await getMarkdownPostBySlug(id);
    if (!myPost) {
      //return 404 page
      return <div><NotFound /></div>
    }
    return (
       
      <div className=" mx-auto">
      <Header />  
      <div className="pt-1 max-w-3xl mx-auto pb-8 pl-3 pr-3">
      <MarkdownRenderer markdown={myPost.body} />
          

          </div>
         
          
      </div>
    )

    
    
  }
  
  

export default Post
