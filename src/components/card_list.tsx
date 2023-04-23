import { Blog } from "@/type/blog";
import { FC } from "react";
import { Card } from "./card";

type CardListProps = {
  blogs: Blog[];
};

export const CardList: FC<CardListProps> = ({ blogs }) => {
  return (
    <ul className="mx-auto border-dashed border-t-2 border-gray-300">
      {blogs.length !== 0 ? (
        blogs.map((blog: Blog) => (
          <li
            key={blog.id}
            className="p-5 border-dashed border-b-2 border-gray-300"
          >
            <Card blog={blog} />
          </li>
        ))
      ) : (
        <li>記事が見つかりませんでした。</li>
      )}
    </ul>
  );
};
