'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <header className="flex items-center justify-between">
        <h1 className="text-4xl font-bold">Mihir Amin</h1>
        <nav className="space-x-4">
          <Link href="/" legacyBehavior>
            <a className="text-blue-500 hover:underline">Home</a>
          </Link>
          <Link href="/blog" legacyBehavior>
            <a className="text-blue-500 hover:underline">Blog</a>
          </Link>
          <Link href="/projects" legacyBehavior>
            <a className="text-blue-500 hover:underline">Projects</a>
          </Link>
        </nav>
      </header>

      {/* About Me Section */}
      <section className="my-12">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed">
          I’m Mihir Amin, a passionate software developer with experience in creating web applications, solving problems, and learning cutting-edge technologies.
        </p>
        <a
          href="/resume.pdf"
          download
          className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Download Resume
        </a>
      </section>

      {/* Experience Section */}
      <section className="my-12">
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Core Engineer at OJUS-APSIT</li>
          <li>Contributor to AI, Cloud, and Security Projects</li>
          <li>Open Source Enthusiast</li>
        </ul>
      </section>

      {/* Footer Section */}
      <footer className="mt-16 border-t pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold">Contact Me:</h3>
            <p className="mt-1">mailaddress@websitename.com</p>
            <p>mihiramin86@apsit.edu.in</p>
          </div>
          {/* Socials Section */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-blue-600">🔗</a>
            <a href="#" className="text-gray-500 hover:text-blue-600">🔗</a>
            <a href="#" className="text-gray-500 hover:text-blue-600">🔗</a>
            <a href="#" className="text-gray-500 hover:text-blue-600">🔗</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
