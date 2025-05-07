import Link from "next/link"
import { MapPin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#0B1F41] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Anoka & Associates</h3>
            <p className="text-gray-300 mb-4">
              Premier legal and insolvency consultancy firm dedicated to providing exceptional legal services.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-[#C9A24B] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#C9A24B] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/people" className="text-gray-300 hover:text-[#C9A24B] transition-colors">
                  Our People
                </Link>
              </li>
              <li>
                <Link href="/expertise" className="text-gray-300 hover:text-[#C9A24B] transition-colors">
                  Expertise
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-gray-300 hover:text-[#C9A24B] transition-colors">
                  Insights & Innovations
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-300 hover:text-[#C9A24B] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-[#C9A24B] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-[#C9A24B] mt-0.5" />
                <span className="text-gray-300">
                  South Atlantic Petroleum Towers, 1 Adeola Odeku Street, Victoria Island, Lagos
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-[#C9A24B]" />
                <a href="mailto:leo_anoka@hotmail.com" className="text-gray-300 hover:text-[#C9A24B] transition-colors">
                  leo_anoka@hotmail.com
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-[#C9A24B]" />
                <a href="tel:+2348033846027" className="text-gray-300 hover:text-[#C9A24B] transition-colors">
                  08033846027
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-[#C9A24B]" />
                <a href="tel:+2349059691602" className="text-gray-300 hover:text-[#C9A24B] transition-colors">
                  09059691602
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Office Hours</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
              <li>Saturday: By Appointment</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Anoka & Associates. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
