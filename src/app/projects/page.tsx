import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

const contentPath = path.join(process.cwd(), 'documentation');

export default function ProjectsPage() {
  const files = fs.readdirSync(contentPath);

  const projects = files.map((fileName) => {
    const filePath = path.join(contentPath, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContents);
    return { slug: fileName.replace('.md', ''), title: data.title, description: data.description };
  });

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <ul className="space-y-8">
        {projects.map((project) => (
          <li key={project.slug} className="border rounded-lg p-4 hover:shadow-lg">
            <Link href={`/projects/${project.slug}`} legacyBehavior>
              <a>
                <h2 className="text-2xl font-semibold">{project.title}</h2>
                <p className="text-gray-600">{project.description}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
