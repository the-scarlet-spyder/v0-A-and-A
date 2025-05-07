import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-[#0B1F41] text-white">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold">Anoka & Associates</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-[#C9A24B]">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-[#C9A24B]">
            About Us
          </Link>
          <Link href="/people" className="text-sm font-medium transition-colors hover:text-[#C9A24B]">
            Our People
          </Link>
          <Link href="/expertise" className="text-sm font-medium transition-colors hover:text-[#C9A24B]">
            Expertise
          </Link>
          <Link href="/insights" className="text-sm font-medium transition-colors hover:text-[#C9A24B]">
            Insights & Innovations
          </Link>
          <Link href="/careers" className="text-sm font-medium transition-colors hover:text-[#C9A24B]">
            Careers
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-[#C9A24B]">
            Contact Us
          </Link>
        </nav>
        <Button
          variant="outline"
          className="hidden md:inline-flex border-[#C9A24B] text-[#C9A24B] hover:bg-[#C9A24B] hover:text-white transition-colors duration-300"
        >
          Get in Touch
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>
    </header>
  )
}
