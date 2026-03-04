
import Banner from "../components/Banner"
import Link from 'next/link';
import SimpleCard from "../components/SimpleCard"
import { fetchPosts } from '@/app/actions'
import { fetchAllPosts } from '@/app/actions'
import { fetchFAQ } from '@/app/actions'
import { fetchStory } from '@/app/actions'
import { fetchLicense } from '@/app/actions'
import SectionHeader from "@/components/SectionHeader";
import Header from "@/components/Header";
import ReadMore from '@/components/ReadMore';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import BannerSmall from '@/components/BannerSmall';
import ImgCard from "@/components/ImgCard";

export default async function Home() {
  /* fetching data from serverside */
  const posts = await fetchPosts();
  const allposts = await fetchAllPosts();
  const faq = await fetchFAQ();
  const story = await fetchStory();
  const licenses = await fetchLicense();
  

  return (
    <main className=" flex mx-auto bg-white text-black min-h-screen flex-col ">
       
       {/* main banner with slogan and sub text */}
       <div className=''>
        <div className="">
          <Header />
          <Banner buttonLeft="Lær mer" buttonLeftUrl="https://ndla.no/nb/r/medie--og-informasjonskunnskap-1/skap-en-lovlig-medieproduksjon/6ce9b7697d/12823" buttonRight="" buttonRightUrl=""  titlePart1="Åpne lisenser" titlePart2="er delingskultur!"/>
        </div>
        <div className='bg-white'>
       <div className="mx-auto bg-white max-w-7xl pb-7">
       
       {/* listing basic intro articles on Creative Commons */}
       <SectionHeader title="CC Introduksjon" subTitle="Kom igang med Creative Commons"/>
          <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:pb-3 "> 
                {allposts.map((posta) => (  
                    <Link key={posta._id} href={`/post/${posta.slug.current}`}>
                    <SimpleCard title={posta.title} url="" description="" tag="" bg="bg-blue-600" text="text-white"/>
                    </Link>
                ))}
          </div>
        </div>
        <div className="mx-auto bg-white ">
       
      {/*hero with CC logo with link to article on a book  */}
       <Hero title="Les booken «Gjort med Creative Commons»" textPart2="En bok om gjenbruk, deling og den digitale allmenningen." buttonText="Lær mer" url="https://www.lulu.com/shop/paul-stacey-and-sarah-hinchliff-pearson-and-bryan-mathers-and-ryan-merkley/gjort-med-creative-commons/paperback/product-m5jy75.html " img="cc-large.png" />  
       <div className=" max-w-full bg-white">
       
       {/* listing projects using CC */}
       {/* <SectionHeader title="Bruker CC" subTitle="Prosjekter som bruker Creatve Commons"/>
          <div className=" grid grid-cols-2 lg:grid-cols-2 gap-3 md:gap-6 p-2 md:pb-3 md:pt-2 mx-auto max-w-7xl"> 
                {story.map((post) => (  
                    <Link key={post._id} href={`/post/${post.slug.current}`}>
                      <ImgCard title={post.title} url={post.description} img={post.mainImage} description={post.description}/>
                    </Link>
                ))}
          </div>*/}
        </div>  
        {/* adsfds */}
        
        {/* listing FAQ */}
        <div className="mx-auto bg-white max-w-7xl pb-7">
        <SectionHeader title="Ofte spurte spørsmål" subTitle="Kom igang med Creative Commons"/>
            <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:pb-3 "> 
                  {faq.map((faqa) => (  
                      <Link key={faqa._id} href={`/post/${faqa.slug.current}`}>
                      <SimpleCard title={faqa.title} url="" description="" tag="" bg="bg-white text" text="text-slate-700"/>
                      </Link>
                  ))}
            </div>
        </div>  
        <div className='pb-7'>
          <ReadMore title="Flere FAQs" url="/faq/" />
        </div>
        

          <BannerSmall textPart1="Åpne lisenser" textPart2="bidrar til" textPart3="trygg deling." />
        </div>          
        {/* asdfa */}
        <Footer /> 
      </div>
      </div>
    </main>
  )
}
