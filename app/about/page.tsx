import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <>
      <section className="relative py-20 bg-[#0B1F41]">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Learn more about our firm, our values, and our commitment to excellence
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-[#0B1F41] mb-6">Our Firm</h2>
              <div className="w-20 h-1 bg-[#C9A24B] mb-6"></div>
              <p className="text-gray-700 mb-6">
                We are a premier legal and insolvency consultancy firm with a reputation for excellence and integrity.
                Established in 2005, we have grown to become one of the leading firms in Nigeria, serving clients across
                various sectors.
              </p>
              <p className="text-gray-700 mb-6">
                Our team of experienced professionals combines deep legal knowledge with practical legal expertise to
                deliver tailored solutions that meet our clients' specific needs and objectives.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Anoka & Associates office"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold text-[#0B1F41] mb-6">Our Mission</h2>
              <div className="w-20 h-1 bg-[#C9A24B] mb-6"></div>
              <p className="text-gray-700">
                To provide exceptional legal services that empowers our clients to achieve their business objectives
                while maintaining the highest standards of professionalism, integrity, and ethical conduct.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold text-[#0B1F41] mb-6">Our Vision</h2>
              <div className="w-20 h-1 bg-[#C9A24B] mb-6"></div>
              <p className="text-gray-700">
                To be one of the most reputable and efficient legal firm, recognized for expertise, innovation, and
                commitment to client success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0B1F41] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8 text-gray-300">
            Contact us today to schedule a consultation and learn how we can help you achieve your legal objectives.
          </p>
          <Button className="bg-[#C9A24B] hover:bg-transparent hover:text-[#C9A24B] hover:border-[#C9A24B] border-2 border-transparent text-white px-8 py-6 rounded-md text-lg transition-all duration-300">
            Contact Us Today
          </Button>
        </div>
      </section>
    </>
  )
}
