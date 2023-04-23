import { Card } from "@/components/card";
import { Header } from "@/components/header";
import { client } from "@/lib/client";
import { Blog } from "@/type/blog";
import { Tag } from "@/type/tag";

type Props = {
  blogs: Blog[];
  tags: Tag[];
};

export default function Home({ blogs, tags }: Props) {
  return (
    <main>
      <Header />
      <div className="container mx-auto pt-5">
        <ul className="w-2/3 mx-auto border-dashed border-t-2 border-gray-300">
          {blogs?.map((blog: Blog) => (
            <li
              key={blog.id}
              className="p-5 border-dashed border-b-2 border-gray-300"
            >
              <Card blog={blog} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const blogs = await client.get({ endpoint: "blogs" });
  const tags = await client.get({ endpoint: "tags" });

  return {
    props: {
      blogs: blogs.contents,
      tags: tags.contents,
    },
  };
};
