import { Tag } from "./tag";

export type Blog = {
  id: string;
  content: string;
  title: string;
  tags: Tag[];
  eyecatch: { url: string; height: number; width: number };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};
