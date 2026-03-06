import Link from "next/link";
import {
  ArrowCircleRight,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  AcademicCapIcon,
  DocumentTextIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/solid";
import { NavButton } from "@/components/NavButton";

interface FooterPathProps {
  next?: string;
  back?: string;
}

export function FooterPath({ next, back }: FooterPathProps) {
  return (
    <div>
      <section className="block fixed inset-x-0 bottom-0 z-10  bg-white shadow-inner p-1 md:px-10">
        <div className="grid grid-cols-3 p-2 md:px-5    ">
          <div className="flex justify-start pl-1 lg:pl-12">
            <NavButton navigation={back} buttonText="Back" />
          </div>
          <Link href="/">
            <div className="">
              <div className="flex justify-center">
                <HomeIcon className="h-6 fill-blue-900 " />
              </div>
              <div className="flex justify-center">
                <h3 className="text-xs font-light">Home</h3>
              </div>
            </div>
          </Link>
          <div className="flex justify-end pr-1 lg:pr-12">
            <NavButton navigation={next} buttonText="Next" />
          </div>
        </div>
      </section>
    </div>
  );
}
