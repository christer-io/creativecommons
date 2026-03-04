'use server'
import {
  getMarkdownPostBySlug,
  getMarkdownPostsByType,
} from "@/lib/content";

type LicenseInfo = {
  url: string;
  description: string;
  license: string;
  language: string;
};

const licenses: LicenseInfo[] = [{
    
  "url": "https://creativecommons.org/licenses/by/4.0/",
  "description": "This license enables reusers to distribute, remix, adapt, and build upon the material in any medium or format, so long as attribution is given to the creator. The license allows for commercial use. ",
  "license": "CC-BY-4.0",
  "language": "en",

},
{
  
  "url": "https://creativecommons.org/licenses/by-sa/4.0/",
  "description": "This license enables reusers to distribute, remix, adapt, and build upon the material in any medium or format, so long as attribution is given to the creator. The license allows for commercial use. If you remix, adapt, or build upon the material, you must license the modified material under identical terms.",
  "license": "CC-BY-SA-4.0",
  "language": "en",

}
]

export async function fetchLicense() {
  return licenses;
}

export async function fetchPosts () {
  return getMarkdownPostsByType("front");
}

export async function fetchAllPosts () {
  return getMarkdownPostsByType("list");
}


// fetching - FAQs for frontpage 
export async function fetchFAQ () {
  return getMarkdownPostsByType("faq");
}

// fetching - FAQs for frontpage 
export async function fetchStory () {
  return getMarkdownPostsByType("story");
}

export async function fetchPostBySlug(slug: string) {
  return getMarkdownPostBySlug(slug);
}
