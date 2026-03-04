import Image from 'next/image'
import Banner from "../../components/Banner"
import Link from 'next/link';
import ImgCard from '@/components/ImgCard';
import SimpleCard from "../../components/SimpleCard"
import { fetchFAQ } from "@/app/actions";


import SectionHeader from "@/components/SectionHeader";
import Header from "@/components/Header";
import ReadMore from '@/components/ReadMore';
import Footer from '@/components/Footer';
import Footermobile from '@/components/Footermobile';
import Hero from '@/components/Hero';
import BannerSmall from '@/components/BannerSmall';
import ExternalLink from '@/components/ExternalLink';

export default async function Faq() {

  const faq = await fetchFAQ();

  return (
    <main className=" flex mx-auto bg-white text-black min-h-screen flex-col ">
       
       <div className=''>
        <div className="">
          <Header />
        
      <div className="mx-auto bg-white max-w-7xl pb-7 pt-10">
       <SectionHeader title="Ofte spurte spørsmål" subTitle="Kom igang med Creative Commons"/>
          <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 md:pb-3 "> 
                {faq.map((faqa) => (  
                    <Link key={faqa._id} href={`/post/${faqa.slug.current}`}>
                    <SimpleCard title={faqa.title} url="" description="" tag="CC" bg="bg-white" text="text-slate-700"/>
                    </Link>
                ))}
          </div>
        </div>  
          <BannerSmall textPart1="Åpne lisenser" textPart2="bidrar til" textPart3="trygg deling!" />
        </div>          
        <Footer />
      </div>
    </main>
  )
}
