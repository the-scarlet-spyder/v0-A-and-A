"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Mail, Phone } from "lucide-react"
import { submitContactForm } from "./actions"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    try {
      const formData = new FormData(e.currentTarget)
      const result = await submitContactForm(formData)

      if (result.success) {
        setMessage({ type: "success", text: "Your message has been sent successfully!" })
        // Reset form
        e.currentTarget.reset()
      } else {
        setMessage({ type: "error", text: result.message || "Something went wrong. Please try again." })
      }
    } catch (error) {
      setMessage({ type: "error", text: "An error occurred. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <section className="relative py-20 bg-[#0B1F41]">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-300">Get in touch with our team of legal experts today</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[#0B1F41] mb-6">Get In Touch</h2>
              <div className="w-20 h-1 bg-[#C9A24B] mb-6"></div>
              <p className="text-gray-700 mb-8">
                We're here to help with your legal needs. Fill out the form below, and one of our experts will get back
                to you shortly.
              </p>

              {message && (
                <div
                  className={`p-4 mb-6 rounded ${message.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                >
                  {message.text}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <Input id="first-name" name="first-name" required placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="last-name" className="text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <Input id="last-name" name="last-name" required placeholder="Enter your last name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" required placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <Input id="phone" name="phone" placeholder="Enter your phone number" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <Input id="subject" name="subject" placeholder="Enter subject" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Enter your message"
                    className="min-h-[150px]"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-[#0B1F41] hover:bg-[#0B1F41]/90 text-white py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#0B1F41] mb-6">Contact Information</h2>
              <div className="w-20 h-1 bg-[#C9A24B] mb-6"></div>
              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 mr-4 text-[#C9A24B] mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-[#0B1F41] mb-2">Office Address</h3>
                    <p className="text-gray-700">
                      South Atlantic Petroleum Towers
                      <br />1 Adeola Odeku Street
                      <br />
                      Victoria Island, Lagos
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 mr-4 text-[#C9A24B] mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-[#0B1F41] mb-2">Email</h3>
                    <p className="text-gray-700">
                      <a href="mailto:leo_anoka@hotmail.com" className="hover:text-[#C9A24B] transition-colors">
                        leo_anoka@hotmail.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 mr-4 text-[#C9A24B] mt-1" />
                  <div>
                    <h3 className="text-lg font-bold text-[#0B1F41] mb-2">Phone</h3>
                    <p className="text-gray-700">
                      <a href="tel:+2348033846027" className="hover:text-[#C9A24B] transition-colors">
                        08033846027
                      </a>
                      <br />
                      <a href="tel:+2349059691602" className="hover:text-[#C9A24B] transition-colors">
                        09059691602
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
