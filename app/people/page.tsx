import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Phone } from "lucide-react"

export default function PeoplePage() {
  return (
    <>
      <section className="relative py-20 bg-[#0B1F41]">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our People</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Meet our team of experienced legal professionals dedicated to your success
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#0B1F41] mb-4">Our Team</h2>
            <div className="w-20 h-1 bg-[#C9A24B] mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-700">
              Our team of experienced professionals combines deep legal knowledge with practical expertise to deliver
              tailored solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="relative h-80">
                <Image src="/placeholder.svg?height=400&width=300" alt="Leonard Anoka" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0B1F41] mb-1">Leonard Anoka</h3>
                <p className="text-[#C9A24B] font-medium mb-4">Managing Partner</p>
                <p className="text-gray-700 mb-6">
                  With extensive experience in corporate law and insolvency, Leonard leads our firm with a commitment to
                  excellence and client satisfaction.
                </p>
                <div className="flex space-x-3">
                  <a
                    href="mailto:leo_anoka@hotmail.com"
                    className="p-2 rounded-full bg-[#0B1F41] text-white hover:bg-[#C9A24B] transition-colors duration-300"
                  >
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </a>
                  <a
                    href="#"
                    className="p-2 rounded-full bg-[#0B1F41] text-white hover:bg-[#C9A24B] transition-colors duration-300"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a
                    href="tel:+2348033846027"
                    className="p-2 rounded-full bg-[#0B1F41] text-white hover:bg-[#C9A24B] transition-colors duration-300"
                  >
                    <Phone className="h-4 w-4" />
                    <span className="sr-only">Phone</span>
                  </a>
                </div>
              </div>
            </div>

            {[
              {
                name: "Ikenna Onuoha",
                title: "Senior Associate",
                bio: "Specializes in litigation and insolvency with extensive experience in complex legal matters.",
              },
              {
                name: "Efemena Thomas-Obumselu",
                title: "Senior Associate",
                bio: "Leads our dispute resolution practice with expertise in mediation and arbitration.",
              },
              {
                name: "Temitope Onabanjo",
                title: "Senior Associate",
                bio: "Specializes in financial institutions and asset recovery with innovative solutions.",
              },
              {
                name: "Chineye Ogugua",
                title: "Senior Associate",
                bio: "Leads our technology, media, entertainment, and matrimonial causes practice areas.",
              },
              {
                name: "Collins Chidili",
                title: "Associate",
                bio: "Specializes in real estate and construction with expertise in property transactions.",
              },
              {
                name: "Ekemini Okpoiso",
                title: "Associate",
                bio: "Works in our litigation team, handling disputes with precision and diligence.",
              },
              {
                name: "Nengi Pepple-Isocrari",
                title: "Associate",
                bio: "Specializes in capital market, corporate and commercial law, and company secretary services.",
              },
            ].map((person, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative h-80">
                  <Image src="/placeholder.svg?height=400&width=300" alt={person.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0B1F41] mb-1">{person.name}</h3>
                  <p className="text-[#C9A24B] font-medium mb-4">{person.title}</p>
                  <p className="text-gray-700 mb-6">{person.bio}</p>
                  <div className="flex space-x-3">
                    <a
                      href="#"
                      className="p-2 rounded-full bg-[#0B1F41] text-white hover:bg-[#C9A24B] transition-colors duration-300"
                    >
                      <Mail className="h-4 w-4" />
                      <span className="sr-only">Email</span>
                    </a>
                    <a
                      href="#"
                      className="p-2 rounded-full bg-[#0B1F41] text-white hover:bg-[#C9A24B] transition-colors duration-300"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                    <a
                      href="#"
                      className="p-2 rounded-full bg-[#0B1F41] text-white hover:bg-[#C9A24B] transition-colors duration-300"
                    >
                      <Phone className="h-4 w-4" />
                      <span className="sr-only">Phone</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0B1F41] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work With Our Team?</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8 text-gray-300">
            Contact us today to schedule a consultation with one of our experienced legal professionals.
          </p>
          <Button className="bg-[#C9A24B] hover:bg-transparent hover:text-[#C9A24B] hover:border-[#C9A24B] border-2 border-transparent text-white px-8 py-6 rounded-md text-lg transition-all duration-300">
            Contact Us Today
          </Button>
        </div>
      </section>
    </>
  )
}
