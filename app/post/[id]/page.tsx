import { NotFound } from "@/components/NotFound";
import { Header } from "@/components/Header";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { getAllMarkdownPosts, getMarkdownPostBySlug } from "@/lib/content";
import GitHubIcon from "@mui/icons-material/GitHub";

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

    const githubFileUrl = `https://github.com/christer-io/creativecommons/blob/main/content/${encodeURIComponent(
      myPost.slug.current
    )}.md`;

    return (
       
      <div className=" mx-auto">
      <Header />  
      <div className="pt-1 max-w-3xl mx-auto pb-8 pl-3 pr-3">
      <MarkdownRenderer markdown={myPost.body} />
      <div className="mt-6 flex justify-end">
        <a
          href={githubFileUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Se eller foresla endringer pa GitHub"
          className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-1.5 text-sm text-slate-700 transition-colors hover:bg-slate-100"
        >
          <GitHubIcon fontSize="small" />
          <span>Se pa GitHub</span>
        </a>
      </div>
          

          </div>
         
          
      </div>
    )

    
    
  }
  
  

export default Post
