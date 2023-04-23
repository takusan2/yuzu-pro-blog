import { Blog } from "@/type/blog";
import { Tag } from "@/type/tag";
import Link from "next/link";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

type SidebarProps = {
  blogs: Blog[];
  tags: Tag[];
} & React.HTMLAttributes<HTMLDivElement>;

export const Sidebar: FC<SidebarProps> = ({ blogs, tags, className }) => {
  const baseClass = "w-full";
  const mergeClass = twMerge(baseClass, className);
  return (
    <>
      <div className={mergeClass}>
        <h3>タグ</h3>
        <ul>
          {tags.map((tag: Tag) => {
            return (
              <li className="my-1 p-2 bg-emerald-200 rounded-md">
                <Link href={`/tag/${tag?.id}`}>{tag?.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
