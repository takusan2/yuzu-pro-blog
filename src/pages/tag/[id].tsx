import { CardList } from "@/components/card_list";
import { Header } from "@/components/header";
import { Sidebar } from "@/components/sidebar";
import { client } from "@/lib/client";
import { Blog } from "@/type/blog";
import { Tag } from "@/type/tag";

type TagProps = {
  blogs: Blog[];
  tags: Tag[];
  tagName: string;
};

export default function TagId({ blogs, tags, tagName }: TagProps) {
  return (
    <>
      <Header />
      <div className="container mx-auto pt-5">
        <h1>{tagName}</h1>
        <div className="flex space-x-5">
          <CardList blogs={blogs} />
          <Sidebar blogs={blogs} tags={tags} className="w-1/3" />
        </div>
      </div>
    </>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "tags" });

  const paths = data.contents.map(
    (content: { id: any }) => `/tag/${content.id}`
  );
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: { params: { id: any } }) => {
  const id = context.params.id;
  const blogs = await client.get({
    endpoint: "blogs",
    queries: { filters: `tags[contains]${id}` },
  });
  const tags = await client.get({ endpoint: "tags" });
  const tagName = await client.get({ endpoint: "tags", contentId: id });
  return {
    props: {
      blogs: blogs.contents,
      tags: tags.contents,
      tagName: tagName.name,
    },
  };
};
