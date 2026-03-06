import Link from 'next/link';
import { SimpleCard } from "@/components/SimpleCard";
import { fetchFAQ } from "@/app/actions";

import { SectionHeader } from "@/components/SectionHeader";
import { Header } from "@/components/Header";
import { Footer } from '@/components/Footer';
import { BannerSmall } from '@/components/BannerSmall';
import GitHubIcon from "@mui/icons-material/GitHub";

export default async function Faq() {

  const faq = await fetchFAQ();

  return (
    <main className=" flex mx-auto bg-white text-black min-h-screen flex-col ">
       
       <div className=''>
        <div className="">
          <Header />
        
      <div className="mx-auto bg-white max-w-7xl pb-7 pt-10">
       <SectionHeader title="Ofte spurte spørsmål" subTitle="Kom igang med Creative Commons"/>
          <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1.5 md:gap-3 p-2 md:pb-3 "> 
                {faq.map((faqa) => {
                  const githubFileUrl = `https://github.com/christer-io/creativecommons/blob/main/content/${encodeURIComponent(
                    faqa.slug.current
                  )}.md`;

                  return (
                    <div key={faqa._id} className="space-y-2">
                      <Link href={`/post/${faqa.slug.current}`} className="block h-full">
                        <SimpleCard title={faqa.title} url="" description="" tag="CC" bg="bg-white" text="text-slate-700"/>
                      </Link>
                      
                    </div>
                  );
                })}
          </div>
        </div>  
          <BannerSmall textPart1="Åpne lisenser" textPart2="bidrar til" textPart3="trygg deling!" />
        </div>          
        <Footer />
      </div>
    </main>
  )
}
