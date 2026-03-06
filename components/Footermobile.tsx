import Link from "next/link";
import {
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  AcademicCapIcon,
  DocumentTextIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/solid";

export function Footermobile() {
  return (
    <div>
      <section className="block fixed inset-x-0 bottom-0 z-10 md:hidden bg-white shadow-inner p-1 md:px-10">
        <div className="grid grid-cols-3 p-2 md:px-5 ">
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
          <Link href="/search/o">
            <div className="">
              <div className="flex justify-center">
                <SearchIcon className="h-6 fill-blue-900 " />
              </div>
              <div className="flex justify-center">
                <h3 className="text-xs font-light">Search FAQ</h3>
              </div>
            </div>
          </Link>

          <Link href="/resources/">
            <div className="">
              <div className="flex justify-center">
                <DocumentTextIcon className=" h-6 fill-blue-900 " />
              </div>
              <div className="flex justify-center">
                <h3 className="text-xs font-light">Resources</h3>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
