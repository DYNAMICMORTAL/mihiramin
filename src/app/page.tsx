'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import '../app/styles/homepage.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function HomePage() {
  const router = useRouter();
  return (
    <main className="container mx-auto px-4 py-8 antialiased subpixel-antialiased">
      {/* Header Section */}
      <div className="navigation flex flex-row justify-between text-col-green my-5 antialiased subpixel-antialiased">
        <header>
          <h1 className="text-5xl font-bold antialiased subpixel-antialiased">Mihir Amin</h1>
        </header>
        <nav className="flex flex-col antialiased subpixel-antialiased">
          <Link href="/" legacyBehavior>
            <a className="text-xl text-black font-medium underline decoration-sky-500/30 decoration-2 hover:underline antialiased subpixel-antialiased">Home</a>
          </Link>
          <Link href="/blog" legacyBehavior>
            <a className="text-xl text-black font-medium underline decoration-pink-500/30 decoration-2 hover:underline antialiased subpixel-antialiased">Blog</a>
          </Link>
          <Link href="/projects" legacyBehavior>
            <a className="text-xl text-black font-medium underline decoration-indigo-500/30 decoration-2 hover:underline antialiased subpixel-antialiased">Projects</a>
          </Link>
        </nav>
      </div>

      <div className="sectionInMiddle flex flex-row justify-between">
          {/* About Me Section */}
        <section className="mainSection max-w-[65vw] pr-12">
          {/* <h2 className="text-2xl font-semibold mb-4">About Me</h2> */}
          <p className="text-lg leading-relaxed antialiased subpixel-antialiased">
            I’m Mihir Amin, a passionate software developer with experience in creating web applications, solving problems, and learning cutting-edge technologies. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quia sed dignissimos dolores doloremque! Velit amet neque aliquam fuga autem magnam harum tempore blanditiis ex eligendi, totam beatae officiis voluptates quibusdam, optio veritatis qui nostrum? Maxime repellendus saepe placeat non quaerat est delectus neque amet illum, tenetur tempore fugit laborum similique omnis assumenda. Reprehenderit non possimus nisi sapiente nihil. Beatae, aspernatur dolorum ad assumenda velit, numquam cupiditate deleniti voluptatem, minus vero voluptas? Reiciendis, tempore quis totam aut ab iste. Alias omnis, ab voluptate placeat quas incidunt at soluta quae. Minima similique veniam sapiente amet reprehenderit quibusdam, esse libero, exercitationem maxime doloribus illo! Necessitatibus, sapiente, eaque tempora beatae molestiae in eveniet qui laudantium voluptates saepe at atque ducimus quae! Commodi assumenda vitae, harum, nam ea sequi delectus labore, voluptas maiores doloremque eveniet pariatur? Laborum cumque nesciunt ex hic obcaecati temporibus, totam nihil, itaque ipsa debitis culpa iste dolores incidunt repudiandae quis.
          </p>
          <a
            href="/resume.pdf"
            download
            className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 antialiased subpixel-antialiased"
          >
            Download Resume
          </a>
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
