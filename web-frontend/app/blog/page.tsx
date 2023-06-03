import FeaturedBlog from "./featuredBlog";
import {
  BlogType,
  getFeaturedBlogData,
  getSortedBlogsData,
} from "../../lib/blogs";
import RegularBlog from "./regularBlog";

export default async function Blog() {
  const allBlogsData = getSortedBlogsData();
  const featuredBlogData = getFeaturedBlogData();

  return (
    <main className="">
      <div className="relative my-10 mx-auto max-w-screen-8xl py-10 px-4 lg:px-8">
        <div className="w-full cursor-pointer">
          <FeaturedBlog blog={featuredBlogData} imageContainerClass="" />
        </div>
        <div className="border-scale-600 my-10 border-t">
          <ol className="grid grid-cols-12 py-16 lg:gap-16">
            {allBlogsData.map((blog: BlogType) => {
              return <RegularBlog key={blog.id} blog={blog} />;
            })}
          </ol>
        </div>
      </div>
    </main>
  );
}
