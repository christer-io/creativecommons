import Button from "@/components/Button"

type Props = {
    title: string;
    textPart2: string;
    buttonText: string;
    url: string;
    img: string;
}

function Hero({ title, textPart2, buttonText, url, img }: Props) {
  return (
    <div>
        <section className="bg-gray-50 ">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div className="pl-2 mr-auto place-self-center lg:col-span-7">
                    <h1 className=" max-w-2xl mb-4 text-4xl font-lg tracking-tight leading-none md:text-5xl xl:text-6xl ">{title}</h1>
                    <p className=" max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl ">{textPart2}</p>
                    <Button buttonText={buttonText} url={url}/>
                </div>
                <div className="hidden h-80 lg:mt-0 lg:col-span-5 lg:flex">
                    <img src={`/${img}`} alt="mockup" />
                </div>                
            </div>
        </section>
    </div>
  )
}

export default Hero