import { parseMarkdownContent } from "@/lib/markdown-parser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy policy - hashmail",
  description: "The privacy policy of hashmail and associated services",
  openGraph: {
    title: "Privacy policy - hashmail",
    description: "The privacy policy of hashmail and associated services",
  },
};

export default async function Privacy() {
  const privacy_policy = await parseMarkdownContent(
    `app/privacy/privacy-policy`
  );

  return (
    <main className="relative my-10 mx-auto max-w-screen-8xl py-10 px-4 lg:px-8">
      <h1 className="text-display-medium font-medium">Privacy Policy</h1>
      <div
        className="prose max-w-screen-8xl dark:prose-invert prose-p:my-4 prose-a:break-words"
        dangerouslySetInnerHTML={{ __html: `${privacy_policy.contentHtml}` }}
      ></div>
    </main>
  );
}
//mx-auto flex h-full w-full flex-col place-items-start justify-center lg:container lg:px-16
