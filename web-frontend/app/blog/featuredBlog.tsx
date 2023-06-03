import Image from "next/image";

interface BlogType {
  id: string;
  image: string;
  title: string;
  ctaText: string;
  date: string;
  type?: string;
  author: AuthorProps;
  subtitle: string;
}

interface AuthorProps {
  name: string;
  desg: string;
  image: string;
}

interface BlogProps {
  blog: BlogType;
  imageContainerClass?: string;
}

const FeaturedBlog: React.FC<BlogProps> = ({ blog }) => {
  return (
    <a
      className="grid gap-8 lg:grid-cols-2 lg:gap-16"
      href={`/blog/${blog.id}`}
    >
      <div className="relative w-full overflow-hidden rounded-lg">
        <Image
          alt="blog thumbnail"
          src={`${blog.image}`}
          width={1000}
          height={500}
          sizes="100vw"
        />
      </div>
      <div className="flex flex-col space-y-2">
        <div className="text-scale-900 flex space-x-2 text-slate-500">
          {blog.date} • {blog.ctaText}
        </div>
        <div>
          <p className="p text-2xl">{blog.title}</p>
          <p className="p py-1 text-sm">{blog.subtitle}</p>
        </div>
        <div className="grid w-max grid-flow-col">
          <div className="flex items-center space-x-3">
            <div className="overflow-none relative h-10 w-10">
              <Image
                src={`${blog.author.image}`}
                fill={true}
                alt={`${blog.author}`}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-scale-1200 m-0 text-sm">
                {blog.author.name}
              </span>
              <span className="text-scale-900 m-0 text-xs">
                {blog.author.desg}
              </span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default FeaturedBlog;
