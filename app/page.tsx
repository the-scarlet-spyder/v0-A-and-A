import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-[#0B1F41]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Law firm background"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-white">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
            SOLVING COMPLEX PROBLEMS AND HELPING INDUSTRY LEADERS BUILD A SUCCESSFUL COMMERCIAL FUTURE
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8 text-gray-200 animate-fade-in-delay">
            Premier legal and insolvency consultancy firm
          </p>
          <Button className="bg-[#C9A24B] hover:bg-transparent hover:text-[#C9A24B] hover:border-[#C9A24B] border-2 border-transparent text-white px-8 py-6 rounded-md text-lg transition-all duration-300 animate-fade-in-delay-longer">
            Explore Our Expertise
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-serif font-bold text-[#0B1F41] mb-12">Our Clients</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
            {[
              "Access Bank Plc",
              "Keystone Bank",
              "Unity Bank",
              "Abbey Mortgage Bank Plc",
              "FCMB Plc",
              "Sterling Bank Plc",
              "Rosabon Financial Services",
              "Ecobank Nigeria Limited",
              "ETI/ESRC",
              "Forte Properties & Investment Limited",
              "Guaranty Trust Bank Plc",
              "Nigeria Deposit Insurance Corporation (NDIC)",
              "Asset Management Corporation of Nigeria (AMCON)",
              "Fidelity Bank Plc",
              "Union Bank Plc",
              "Stanbic IBTC",
              "First Bank Plc",
              "Pinnacle Oil and Gas Limited",
              "Providus Bank",
              "Federal Mortgage Bank of Nigeria",
              "Globus Bank",
              "Adnil Travels and Tours Limited",
              "ZTE Nigeria Limited",
              "Page International Finance Company Limited",
              "Burkett Bureau De Change Limited",
              "Sterling Capital Limited",
              "Burkett Bureau De Change Loan Services",
            ].map((client, index) => (
              <div key={index} className="text-center">
                <div className="h-20 w-full bg-gray-100 rounded-md flex items-center justify-center px-4">
                  <span className="font-medium text-gray-600 text-sm">{client}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="About Anoka & Associates"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif font-bold text-[#0B1F41] mb-6">About Us</h2>
              <div className="w-20 h-1 bg-[#C9A24B] mb-6"></div>
              <p className="text-gray-700 mb-6">
                We are a premier legal and insolvency consultancy firm with a reputation for excellence and integrity.
                Established in 2005, we have grown to become one of the leading firms in Nigeria, serving clients across
                various sectors.
              </p>
              <p className="text-gray-700 mb-8">
                Our team of experienced professionals combines deep legal knowledge with practical legal expertise to
                deliver tailored solutions that meet our clients' specific needs and objectives.
              </p>
              <Button
                variant="outline"
                className="border-[#0B1F41] text-[#0B1F41] hover:bg-[#0B1F41] hover:text-white transition-colors duration-300"
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-[#0B1F41] mb-4">Our Expertise</h2>
            <div className="w-20 h-1 bg-[#C9A24B] mx-auto mb-6"></div>
            <p className="max-w-2xl mx-auto text-gray-700">
              We offer comprehensive legal services across various practice areas to meet the diverse needs of our
              clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Dispute Resolution",
                description:
                  "Expert advice and representation on mediation, arbitration and other forms of alternative dispute resolution.",
              },
              {
                title: "Capital Market/Corporate and Commercial",
                description:
                  "Corporate restructuring, business advisory, insolvency, taxation, mergers and acquisition, and more.",
              },
              {
                title: "Company Secretary Services",
                description:
                  "Technical and practical support on all aspects of corporate compliance, governance, and administration.",
              },
              {
                title: "Real Estate & Construction",
                description:
                  "Experience in real estate finance, investment, sales and acquisition, drafting of conveyance documents, and more.",
              },
              {
                title: "Financial Institutions/Asset Recovery",
                description:
                  "Legal services to leading Banking & Financial Institutions in Nigeria with innovative solutions.",
              },
              {
                title: "Insolvency",
                description:
                  "Advice on all aspects of Corporate Restructuring, Business Rescue, Corporate Recovery and Litigation.",
              },
              {
                title: "Litigation",
                description:
                  "Timely and solution driven services in legal disputes and court proceedings with precision and diligence.",
              },
              {
                title: "Technology, Media and Entertainment",
                description:
                  "Transformative solutions in the ever-evolving worlds of technology, media, and entertainment.",
              },
              {
                title: "Matrimonial Causes & Adoption",
                description: "Expert legal services for matrimonial causes and adoption processes.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group"
              >
                <h3 className="text-xl font-bold text-[#0B1F41] mb-4 group-hover:text-[#C9A24B] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <Link href="/expertise" className="text-[#C9A24B] font-medium flex items-center group-hover:underline">
                  Learn more
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0B1F41] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-6">Looking for expert legal counsel?</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8 text-gray-300">
            We're ready to partner with you and provide the strategic guidance your business needs.
          </p>
          <Button className="bg-[#C9A24B] hover:bg-transparent hover:text-[#C9A24B] hover:border-[#C9A24B] border-2 border-transparent text-white px-8 py-6 rounded-md text-lg transition-all duration-300">
            Contact Us Today
          </Button>
        </div>
      </section>
    </>
  )
}
