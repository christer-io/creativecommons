"use client";
import { useFormStatus } from "react-dom";
import { SearchIcon } from "@heroicons/react/solid";

export function SearchButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-blue-900 hover:bg-blue-900/80 text-white font-bold py-4 px-4 rounded-full disabled:opacity-50 "
      aria-label="Search button"
    >
      {pending && "Searching..."}
      {!pending && <SearchIcon className="h-5 w-5" />}
    </button>
  );
}
