import { parseMarkdownContent } from "@/lib/markdown-parser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and conditions - hashmail",
  description: "The terms and conditions of hashmail and associated services",
  openGraph: {
    title: "Terms and conditions - hashmail",
    description: "The terms and conditions of hashmail and associated services",
  },
};

export default async function Privacy() {
  const tnc = await parseMarkdownContent(`app/tnc/tnc`);

  return (
    <main className="relative my-10 mx-auto max-w-screen-8xl py-10 px-4 lg:px-8">
      <h1 className="text-display-medium font-medium">Terms and Conditions</h1>
      <div
        className="prose max-w-screen-8xl dark:prose-invert prose-p:my-4 prose-a:break-words"
        dangerouslySetInnerHTML={{ __html: `${tnc.contentHtml}` }}
      ></div>
    </main>
  );
}
//mx-auto flex h-full w-full flex-col place-items-start justify-center lg:container lg:px-16
