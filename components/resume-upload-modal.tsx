"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { submitResume } from "@/app/actions"

interface ResumeUploadModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ResumeUploadModal({ isOpen, onClose }: ResumeUploadModalProps) {
  const [file, setFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage(null)

    try {
      const formData = new FormData(e.currentTarget)

      if (file) {
        formData.append("resume", file)
      }

      const result = await submitResume(formData)

      if (result.success) {
        setMessage({ type: "success", text: "Your resume has been submitted successfully!" })
        // Reset form
        e.currentTarget.reset()
        setFile(null)
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-bold text-[#0B1F41] mb-4">Submit Your Resume</h2>

        {message && (
          <div
            className={`p-3 mb-4 rounded ${message.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
          >
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Full Name
            </label>
            <Input id="name" name="name" required placeholder="Enter your full name" />
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
            <label htmlFor="position" className="text-sm font-medium text-gray-700">
              Position of Interest
            </label>
            <Input id="position" name="position" placeholder="Enter position you're applying for" />
          </div>

          <div className="space-y-2">
            <label htmlFor="resume" className="text-sm font-medium text-gray-700">
              Resume/CV
            </label>
            <Input
              id="resume"
              name="resume"
              type="file"
              accept=".pdf,.doc,.docx"
              required
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  setFile(e.target.files[0])
                }
              }}
            />
            <p className="text-xs text-gray-500">Accepted formats: PDF, DOC, DOCX</p>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-700">
              Cover Letter / Additional Information
            </label>
            <Textarea
              id="message"
              name="message"
              placeholder="Tell us about yourself and why you're interested in this position"
            />
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              className="w-full bg-[#0B1F41] hover:bg-[#0B1F41]/90 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
