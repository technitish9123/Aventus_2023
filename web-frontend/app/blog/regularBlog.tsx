import Image from "next/image";

interface BlogType {
  id: string;
  image: string;
  title: string;
  ctaText: string;
  date: string;
  type?: string;
  author: AuthorProps;
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

const RegularBlog: React.FC<BlogProps> = ({ blog }) => {
  return (
    <div className="md:col-span-12 col-span-12 lg:col-span-6 xl:col-span-4">
      <div>
        <a href={`/blog/${blog.id}`}>
          <div className="group inline-block min-w-full transition hover:scale-105">
            <div className="flex flex-col space-y-3">
              <div className="w-full overflow-hidden rounded-lg object-contain shadow-sm lg:max-h-56">
                <Image
                  alt="blog thumbnail"
                  src={`${blog.image}`}
                  width={1000}
                  height={500}
                  sizes="100vw"
                />
              </div>
              <p className="text-scale-1200 max-w-sm text-xl">{blog.title}</p>
              <p className="text-scale-1100 text-xs">
                {blog.date} • {blog.ctaText}
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default RegularBlog;
