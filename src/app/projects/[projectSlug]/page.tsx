import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from 'next/image';

// Define the path to the content folder
const contentPath = path.join(process.cwd(), 'documentation');

export default function ProjectPage({ params }: { params: { projectSlug: string } }) {
  const { projectSlug } = params;

  // Load the Markdown file for the given slug
  const filePath = path.join(contentPath, `${projectSlug}.md`);
  const fileContents = fs.readFileSync(filePath, 'utf-8');
  const { data } = matter(fileContents); // Extract front matter and content

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">{data.title}</h1>

      {/* Render Images */}
      <div className="my-4">
        {data.images.map((img: string, index: number) => (
          <Image
            key={index}
            src={img}
            alt={`Image ${index + 1} for ${data.title}`}
            width={600}
            height={400}
            className="rounded-lg mb-4"
          />
        ))}
      </div>

      {/* Render Description */}
      <p className="text-lg leading-relaxed">{data.description}</p>

      {/* Render Hyperlinks */}
      <div className="mt-6">
        {data.hyperlinks.map((link: { text: string; url: string }, index: number) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline block mb-2"
          >
            {link.text}
          </a>
        ))}
      </div>
    </main>
  );
}
