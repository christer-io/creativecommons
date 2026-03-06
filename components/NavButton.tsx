import Link from "next/link";

interface NavButtonProps {
  navigation?: string;
  buttonText: string;
}

export function NavButton({ navigation, buttonText }: NavButtonProps) {
  if (!navigation) {
    return <div></div>;
  }

  return (
    <div>
      <Link href={`/path/${navigation}`}>
        <div className="">
          <div className="flex justify-end pr-1 lg:pr-12">
            <button className="h-10 w-20 bg-blue-900 text-white pt-1 pb-1 pl-2 pr-2 rounded-xl">
              {buttonText}
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}
