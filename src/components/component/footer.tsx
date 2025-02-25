import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2  md:px-8">
          <p className="text-center text-sm leading-loose md:text-left">
            © 2025 Ricardo Gonzalez Mendez ❤️. All rights reserved, and may the force be with you.
          </p>
        </div>
        <div className="flex gap-4 px-8">
          <a href="https://github.com/ricardoGonzaM" target="_blank" rel="noreferrer">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span> 
          </a>
          <a href="https://www.linkedin.com/in/ricardo-gonzalez-mendez-2056b7262/" target="_blank" rel="noreferrer">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  )
}

