'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"

export default function ProjectsPage() {
  interface Project {
    slug: string;
    title: string;
    description: string;
  }

  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    fetch('/api/projects')
      .then((response) => response.json())
      .then((data) => setProjects(data.projects));
  }, []);

  const handleDownload = () => {
    setIsLoading(true);
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = '/resume.pdf';
      link.download = 'resume.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsLoading(false);
    }, 700);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="navbar flex flex-row justify-between text-col-green my-5">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        <Button onClick={handleDownload} disabled={isLoading} className="px-6 py-2 bg-[#d2c4c4] hover:bg-[#d2c4c4] text-black rounded antialiased subpixel-antialiased max-w-[7.5vw]">
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin mr-2 text-black" />
                  Please wait
                </>
              ) : (
                `Resume`
              )}
            </Button>
      </div>
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
