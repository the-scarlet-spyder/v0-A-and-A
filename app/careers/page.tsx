"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ResumeUploadModal } from "@/components/resume-upload-modal"

export default function CareersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="relative py-20 bg-[#0B1F41]">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Careers</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">
            Join our team of legal professionals and build a rewarding career
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-[#0B1F41] mb-6">Join Our Team</h2>
              <div className="w-20 h-1 bg-[#C9A24B] mb-6"></div>
              <p className="text-gray-700 mb-6">
                At Anoka & Associates, we are always looking for talented legal professionals to join our team. We offer
                a collaborative and supportive work environment where you can grow your career while making a meaningful
                impact for our clients.
              </p>
              <p className="text-gray-700 mb-6">
                We value diversity, innovation, and excellence in everything we do. If you are passionate about law and
                committed to delivering exceptional client service, we'd love to hear from you.
              </p>
              <p className="text-gray-700 mb-6">Job opportunities will be posted here as they become available.</p>
              <Button className="bg-[#0B1F41] hover:bg-[#0B1F41]/90 text-white" onClick={() => setIsModalOpen(true)}>
                Submit Your Resume
              </Button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Join our team"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <ResumeUploadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
