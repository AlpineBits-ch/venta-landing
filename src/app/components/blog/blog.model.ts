export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  summary: string;
  content: string; // plain HTML string
}
