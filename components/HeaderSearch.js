"use client"
import Image from "next/image";
import Link from "next/link";
import SearchButton from "./SearchButton";
import { useState } from "react";
import {
  SearchSelect,
  SearchSelectItem,
  Select,
  SelectItem,
} from "@tremor/react";

import { useRouter } from "next/navigation";
import { Title, Metric } from "@tremor/react";


function HeaderSearch() {
  const [license, setLicense] = useState("all");
  const [contentType, setContentType] = useState("all") ;
  const router = useRouter();

  return (
     
     <header className="pb-2 pt-2"> 
    
      <div className="w-full ">
        <form action={FormData =>{
          
          let searchTerm = FormData.get("searchTerm");
          const params = new URLSearchParams();
          if (!searchTerm) {
            return "No value provided";
          };

        router.push(`/search/${searchTerm}`)
        }}>
          <div className="flex items-center gap-2 w-full  ">
            <div className="flex items-center space-x-2 bg-white shadow-xl rounded-full border-gray-200  px-6 py-4 flex-1">
              <input type="text" name="searchTerm" placeholder="Find your FAQ..." className="outline-none flex-1 border border-gray-200"/>
            </div>
            <div className="pr-2">
              <SearchButton />
            </div>
            
          </div>
        
        </form>
      </div>
     </header>
     
  )
}

export default HeaderSearch