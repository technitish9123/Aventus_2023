import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import rehypeExternalLinks from "rehype-external-links";

const blogsDirectory = path.join(process.cwd(), "/blogs-markdown");

const featuredBlogId = "three-rs-of-personalization";

export interface BlogType {
  id: string;
  image: string;
  title: string;
  ctaText: string;
  date: string;
  type?: string;
  author: AuthorProps;
  subtitle: string;
}

export interface BlogContent extends BlogType {
  contentHtml: string;
}

export interface AuthorProps {
  name: string;
  desg: string;
  image: string;
}

export function getSortedBlogsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(blogsDirectory);
  const allPostsData = fileNames
    .filter((file) => file !== `${featuredBlogId}.md`)
    .map((fileName) => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, "");

      // Read markdown file as string
      const fullPath = path.join(blogsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      let options = {
        dateStyle: "medium",
      };

      matterResult.data.date = new Date(matterResult.data.date).toLocaleString(
        "en-US",
        options as any
      );

      // Combine the data with the id
      return {
        id,
        ...matterResult.data,
      } as BlogType;
    });
  // Sort posts by date

  //@ts-ignore
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  });
}

export function getBlogMeta(id: string) {
  const fullPath = path.join(blogsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  let options = {
    dateStyle: "medium",
  };

  matterResult.data.date = new Date(matterResult.data.date).toLocaleString(
    "en-US",
    options as any
  );

  return {
    id,
    ...matterResult.data,
  } as BlogType;
}

export async function getBlogContent(id: string) {
  const fullPath = path.join(blogsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await unified()
    .data("settings", { fragment: true })
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings)
    .use(rehypeExternalLinks, {
      rel: ["noopener noreferrer"],
      target: "_blank",
    })
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  } as BlogContent;
}

export function getFeaturedBlogData(id: string = featuredBlogId) {
  return getBlogMeta(id);
}
