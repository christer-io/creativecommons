"use client";
import { SearchButton } from "./SearchButton";
import { useRouter } from "next/navigation";

export function HeaderSearch() {
  const router = useRouter();

  return (
    <header className="pb-2 pt-2">
      <div className="w-full ">
        <form
          action={(formData) => {
            const searchTerm = formData.get("searchTerm");
            if (searchTerm) {
              router.push(`/search/${searchTerm}`);
            }
          }}
        >
          <div className="flex items-center gap-2 w-full  ">
            <div className="flex items-center space-x-2 bg-white shadow-xl rounded-full border-gray-200  px-6 py-4 flex-1">
              <input
                type="text"
                name="searchTerm"
                placeholder="Find your FAQ..."
                className="outline-none flex-1 border border-gray-200"
              />
            </div>
            <div className="pr-2">
              <SearchButton />
            </div>
          </div>
        </form>
      </div>
    </header>
  );
}
