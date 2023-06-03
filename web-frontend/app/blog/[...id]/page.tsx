/* eslint-disable @next/next/no-html-link-for-pages */
import { BLOGS_SOCIALS_CONSTANTS } from "./blogs.constants";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/20/solid";
import React from "react";
import { getBlogContent, getBlogMeta } from "@/lib/blogs";
import { Metadata } from "next";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  // fetch data
  const blogMetaData = getBlogMeta(params.id[0]);

  return {
    title: `hashmail | ${blogMetaData.title}`,
    openGraph: {
      title: `hashmail | ${blogMetaData.title}`,
      images: {
        url: `https://hashmail.dev/assets/blog-assets/${blogMetaData.id}/hero-image.png?123`,
        alt: `${blogMetaData.title}`,
      },
    },
    twitter: {
      images: {
        url: `https://hashmail.dev/assets/blog-assets/${blogMetaData.id}/hero-image.png?123`,
        alt: `${blogMetaData.title}`,
      },
      creator: "@0x_hashmail",
      card: "summary_large_image",
      site: "@0x_hashmail",
      title: `${blogMetaData.title}`,
    },
  };
}

export default async function BlogContent(props: { params: any }) {
  const blogData = await getBlogContent(props.params.id[0]);
  const generateBlogId = (socialId: string) => {
    switch (socialId) {
      case "twitter":
        return `http://twitter.com/intent/tweet?text=https://www.hashmail.dev/blog/${blogData.id}`;
      case "linkedin":
        return `https://www.linkedin.com/sharing/share-offsite/?url=https://www.hashmail.dev/blog/${blogData.id}`;
      default:
        return `/`;
    }
  };
  return (
    <div className=" relative mx-auto my-10 max-w-screen-8xl px-4 py-10 lg:px-8">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 mb-2 lg:col-span-3">
          <h4 className="text-xl">
            <Link href="/blog" className="flex flex-row gap-x-3">
              <figure className="h-6 w-6">
                <ArrowLeftIcon />
              </figure>
              all blogs
            </Link>
          </h4>
        </div>

        <div className="col-span-12 lg:col-span-6">
          <h2 className="w-full text-xl font-semibold lg:text-3xl">
            {blogData.title}
          </h2>
          <div className="my-4 flex flex-row items-center justify-between">
            <div className="author">
              <div className="flex flex-row gap-x-4">
                <figure className="relative h-8 w-8 rounded-full border">
                  <Image
                    src={blogData.author.image}
                    alt={blogData.author.name}
                    className="rounded-full"
                    fill={true}
                  />
                </figure>
                <div className="flex flex-col items-start">
                  <p className="font-medium sm:leading-tight">
                    {blogData.author.name}
                  </p>
                  <p className="text-sm sm:leading-tight">
                    {blogData.date} | {blogData.ctaText}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-x-4">
              {BLOGS_SOCIALS_CONSTANTS.map((socialIcon) => (
                <a
                  href={generateBlogId(socialIcon.id)}
                  target="_blank"
                  rel="noreferrer"
                  key={socialIcon.id}
                >
                  <figure className="relative h-6 w-6 cursor-pointer">
                    <Image
                      src={`${socialIcon.image}-gradient.${socialIcon.image_type}`}
                      className="rounded-sm"
                      alt={socialIcon.name}
                      fill={true}
                    />
                  </figure>
                </a>
              ))}
            </div>
          </div>

          {blogData.type === "video" ? (
            <video autoPlay loop muted playsInline className={`w-full`}>
              <source src={`${blogData.image}.mp4`} type="video/mp4" />
              <source src={`${blogData.image}.webm`} type="video/webm" />
            </video>
          ) : (
            <div
              className="mt-10 aspect-auto w-full bg-contain bg-center bg-no-repeat lg:h-[400px]"
              style={{ backgroundImage: `url(${blogData.image})` }}
            />
          )}

          <section
            className="prose mt-12 max-w-none select-text  dark:prose-invert prose-p:break-words prose-code:text-ellipsis prose-code:whitespace-pre-wrap prose-img:mx-auto"
            dangerouslySetInnerHTML={{ __html: blogData.contentHtml }}
          />
          {/* <section className="mt-10 sm:mt-32">
            <hr className="border-secondary-rock-blue border-opacity-50" />
            <div className="mt-10 grid grid-cols-2 gap-6 sm:gap-14">
              <div className={`${prevBlogData ? "visible" : "invisible"}`}>
                <h1 className="line-clamp-1 text-xl font-medium">
                  {prevBlogData?.title}
                </h1>
                <Link href={`/blog/${prevBlogData?.id}`}>
                  <span className="flex-row-start text-hash-red-gradient mt-4 w-max cursor-pointer gap-x-2 text-lg text-opacity-80 hover:font-medium hover:text-opacity-100 lg:text-xl">
                    <figure className="h-6 w-6">
                      <ArrowLeftIcon className="text-primary-cinnabar" />
                    </figure>
                    prev blog
                  </span>
                </Link>
              </div>
              <div
                className={`${nextBlogData ? "visible" : "invisible"} text-end`}
              >
                <h1 className="line-clamp-1 text-xl font-medium">
                  {nextBlogData?.title}
                </h1>
                <Link href={`/blog/${nextBlogData?.id}`}>
                  <span className="flex-row-start text-hash-red-gradient mt-4 ml-auto w-max cursor-pointer gap-x-2 text-lg text-opacity-80 hover:font-medium hover:text-opacity-100 lg:text-xl">
                    next blog
                    <figure className="h-6 w-6">
                      <ArrowRightIcon className="text-primary-cinnabar" />
                    </figure>
                  </span>
                </Link>
              </div>
            </div>
          </section> */}
        </div>
      </div>
    </div>
  );
}
