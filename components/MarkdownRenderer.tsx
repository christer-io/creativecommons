"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Props = {
  markdown: string;
};

export default function MarkdownRenderer({ markdown }: Props) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1: ({ children }) => <h1 className="text-4xl font-sans my-3 text-blue-900">{children}</h1>,
        h2: ({ children }) => <h2 className="text-2xl font-sans my-3 text-gray-700">{children}</h2>,
        h3: ({ children }) => <h3 className="text-xl font-sans my-3 text-gray-700">{children}</h3>,
        p: ({ children }) => <p className="text-l font-sans my-4 text-gray-700">{children}</p>,
        li: ({ children }) => <li className="ml-4 list-disc text-gray-700">{children}</li>,
        a: ({ href, children }) => (
          <a href={href} className="text-blue-500 hover:underline">
            {children}
          </a>
        ),
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
}
