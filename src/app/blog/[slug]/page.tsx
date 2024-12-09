import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Define the path to the content folder
const contentPath = path.join(process.cwd(), 'content');

// Fetch Markdown file based on the slug
async function getPost(slug: string) {
  const filePath = path.join(contentPath, `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContents); // Extract front matter and content

  const renderedContent = await remark().use(html).process(content); // Convert Markdown to HTML
  return { metadata: data, content: renderedContent.toString() };
}

// Fetch all Markdown files in the content folder
async function getAllPosts() {
  const files = fs.readdirSync(contentPath);
  return files.map(file => {
    const slug = file.replace(/\.md$/, '');
    const filePath = path.join(contentPath, file);
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContents);
    return { slug, metadata: data };
  });
}

export default async function BlogPost({ params }: { params: { slug?: string } }) {
  if (params.slug) {
    const { metadata, content } = await getPost(params.slug);
    return (
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">{metadata.title}</h1>
        <p className="text-gray-500 mb-8">{metadata.date}</p>
        <article
          className="prose prose-lg"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </main>
    );
  } else {
    const posts = await getAllPosts();
    return (
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <ul>
          {posts.map(post => (
            <li key={post.slug} className="mb-4">
              <a href={`/blog/${post.slug}`} className="text-2xl text-blue-500 hover:underline">
                {post.metadata.title}
              </a>
              <p className="text-gray-500">{post.metadata.date}</p>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
