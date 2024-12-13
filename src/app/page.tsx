'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import '../app/styles/homepage.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import { useState } from 'react';

export default function HomePage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

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
    }, 600); // 500ms delay
  };

  return (
    <main className="container mx-auto px-4 py-8 antialiased subpixel-antialiased">
      {/* Header Section */}
      <div className="navigation flex flex-row justify-between text-col-green my-5 antialiased subpixel-antialiased">
        <header>
          <h1 className="text-5xl font-bold antialiased subpixel-antialiased">Mihir Amin</h1>
        </header>
        <nav className="flex flex-col antialiased subpixel-antialiased">
          <Link prefetch href="/" legacyBehavior>
            <a className="text-xl text-black font-medium underline decoration-sky-500/30 decoration-2 hover:underline antialiased subpixel-antialiased">Home</a>
          </Link>
          <Link prefetch href="/blog" legacyBehavior>
            <a className="text-xl text-black font-medium underline decoration-pink-500/30 decoration-2 hover:underline antialiased subpixel-antialiased">Blog</a>
          </Link>
          <Link prefetch href="/projects" legacyBehavior>
            <a className="text-xl text-black font-medium underline decoration-indigo-500/30 decoration-2 hover:underline antialiased subpixel-antialiased">Projects</a>
          </Link>
        </nav>
      </div>

      <div className="sectionInMiddle flex flex-row justify-between">
          {/* About Me Section */}
        <section className="mainSection max-w-[65vw] pr-12">
          {/* <h2 className="text-2xl font-semibold mb-4">About Me</h2> */}
          <div className="sectionFlexedForResume flex flex-col justify-between h-[25em]">
            <p className="text-lg leading-relaxed antialiased subpixel-antialiased">
              I am a GenAI, Web and App Development enthusiast with a keen passion for Cloud Computing. I'm in Third Year Engineering with Bachelors in Computers from Mumbai University.<br />
              {/* I'm Head of Technical Team and have speargheaded Technical and Cultural Festivals. I'm a Core Member at Artifical Intelligence and Machine Learning Club, Data Science and Analytics Club.
              <br /> */}
              My experience in web and mobile app development focuses on crafting user-centric, scalable solutions that enhance engagement and retention. By aligning development with business objectives, I create applications that drive user satisfaction and contribute to sustainable company growth.
            </p>
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
        </section>

        {/* Experience Section */}
        <section className="my-12 experience">
          <h2 className="text-2xl font-semibold mb-4 antialiased subpixel-antialiased">Experience</h2>
          <ul className="list-disc pl-5 space-y-2 antialiased subpixel-antialiased">
            <li>Core Engineer at OJUS-APSIT</li>
            <li>Contributor to AI, Cloud, and Security Projects</li>
            <li>Open Source Enthusiast</li>
          </ul>
        </section>
      </div>

      <div className="mailAndSocials flex flex-col max-w-[30vw]">
          {/* Footer Section */}
        <footer className="mt-16 border-t pt-7">
          <div className="flex flex-col md:flex-row justify-between">
            {/* Contact Section */}
            <div>
              <h3 className="text-xl font-semibold antialiased subpixel-antialiased">Contact Me:</h3>
              <a href="mailto:mailaddress@websitename.com"><p className="mt-1 antialiased subpixel-antialiased">mailaddress@websitename.com</p></a>
              <a href="mailto:mihiramin86@apsit.edu.in"><p>mihiramin86@apsit.edu.in</p></a>
            </div>
            {/* Socials Section */}
            <div className="socials flex flex-col text-xl font-semibold antialiased subpixel-antialiased">
              <p className="socialsText">Socials:-</p>
              <div className="flex space-x-4">
                <GitHubIcon />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                  <path d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <LinkedInIcon />
                <InstagramIcon />
                {/* <a href="#" className="text-gray-500 hover:text-blue-600">🔗</a>
                <a href="#" className="text-gray-500 hover:text-blue-600">🔗</a>
                <a href="#" className="text-gray-500 hover:text-blue-600">🔗</a>
                <a href="#" className="text-gray-500 hover:text-blue-600">🔗</a> */}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
