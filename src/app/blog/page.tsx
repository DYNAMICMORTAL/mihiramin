import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

// Define the path to the content folder
const contentPath = path.join(process.cwd(), 'content');

export default function BlogPage() {
  // Read all Markdown files
  const files = fs.readdirSync(contentPath);

  // Extract metadata from each file
  const posts = files.map((fileName) => {
    const filePath = path.join(contentPath, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContents); // Extract front matter
    return { slug: fileName.replace('.md', ''), title: data.title, summary: data.summary, date: data.date };
  });

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} legacyBehavior>
              <a className="text-blue-500 hover:underline">
                <h2 className="text-2xl font-semibold">{post.title}</h2>
              </a>
            </Link>
            <p className="text-gray-600">{post.summary}</p>
            <p className="text-sm text-gray-500">{post.date}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
