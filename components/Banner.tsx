import { SearchIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { ReactNode } from "react";

const isExternalUrl = (url = ""): boolean => /^https?:\/\//i.test(url);
const hasText = (value = ""): boolean =>
  typeof value === "string" && value.trim().length > 0;

interface BannerActionLinkProps {
  href: string;
  className: string;
  children: ReactNode;
}

function BannerActionLink({
  href,
  className,
  children,
}: BannerActionLinkProps) {
  if (isExternalUrl(href)) {
    return (
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

interface BannerProps {
  titlePart1: string;
  titlePart2: string;
  buttonLeft?: string;
  buttonLeftUrl?: string;
  buttonRight?: string;
  buttonRightUrl?: string;
}

export function Banner({
  titlePart1,
  titlePart2,
  buttonLeft = "",
  buttonLeftUrl = "",
  buttonRight = "",
  buttonRightUrl = "",
}: BannerProps) {
  const showLeftButton = hasText(buttonLeft) && hasText(buttonLeftUrl);
  const showRightButton = hasText(buttonRight) && hasText(buttonRightUrl);
  const showButtons = showLeftButton || showRightButton;

  return (
    <div className="pb-8">
      <section className="bg-gray-200 pt-6">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 ">
          <a
            className="hidden sm:inline-flex justify-between  items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-white rounded-full "
            role="alert"
          >
            <span className="text-xs bg-green-700 rounded-full text-white px-4 py-1.5 mr-3">
              Beta
            </span>{" "}
            <span className="text-sm font-medium">Creative Commons Norge!</span>
            <svg
              className="ml-2 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-slate-700 md:text-5xl lg:text-7xl dark:text-white pl-10 pr-10 pt-7">
            {" "}
            <span className="text-blue-600/80">{titlePart1}</span>{" "}
            <span className="text-gray-800/80">{titlePart2}</span>{" "}
          </h1>
          <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 xl:px-48 text-slate-700 pl-10 pr-10">
            Creative Commons jobber for å fremme delingskultur gjennom våre
            lisenser.
          </p>
          {showButtons && (
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              {showLeftButton && (
                <BannerActionLink
                  href={buttonLeftUrl}
                  className="inline-flex border border-blue-500 justify-center items-center py-3 px-5 text-black font-medium text-center bg-white rounded-lg bg-blue/80 hover:bg-blue/80 focus:ring-4 focus:bg-blue-500 "
                >
                  {buttonLeft}
                  <svg
                    className="ml-2 -mr-1 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </BannerActionLink>
              )}
              {showRightButton && (
                <BannerActionLink
                  href={buttonRightUrl}
                  className="inline-flex justify-center items-center py-3 px-5 text-black font-medium text-center text-gray-900 rounded-lg border border-blue-500 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 border-gray-700 hover: bg-white "
                >
                  <SearchIcon className="h-6 w-6 pr-1" />
                  {buttonRight}
                </BannerActionLink>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
