import { Blog } from "@/type/blog";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

type CardProps = {
  blog: Blog;
  letterLength?: number;
} & React.HTMLAttributes<HTMLDivElement>;

export const Card: React.FC<CardProps> = ({
  blog,
  letterLength = 50,
  className,
}) => {
  const baseClass = "container";
  const mergeClass = twMerge(baseClass, className);
  return (
    <div className={mergeClass}>
      <Link href={`/blog/${blog.id}`}>
        <div className="flex space-x-4 hover:bg-slate-100">
          <div className="w-1/2 relative">
            <div className="w-full;">
              <img
                src={
                  blog.eyecatch?.url || "/assets/images/default_eyecatch.png"
                }
                className="w-full"
                alt={blog.title}
              />
            </div>
          </div>
          <div className="w-1/2">
            <h3>{blog.title}</h3>
            <p>
              {blog.content.replace(/(<([^>]+)>)/gi, "").slice(0, letterLength)}
              …
            </p>
            <div className="align-text-bottom">
              <p>{blog.publishedAt}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
