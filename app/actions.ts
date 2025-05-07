"use server"
import nodemailer from "nodemailer"

// Configure email transporter
const transporter = nodemailer.createTransport({
  host: "smtp.example.com", // Replace with your SMTP host
  port: 587,
  secure: false,
  auth: {
    user: "your-email@example.com", // Replace with your email
    pass: "your-password", // Replace with your password or app password
  },
})

// Company email to receive submissions
const COMPANY_EMAIL = "leo_anoka@hotmail.com"

export async function submitContactForm(formData: FormData) {
  try {
    const name = formData.get("first-name") + " " + formData.get("last-name")
    const email = formData.get("email")
    const phone = formData.get("phone")
    const subject = formData.get("subject")
    const message = formData.get("message")

    // Validate required fields
    if (!name || !email || !message) {
      return { success: false, message: "Please fill in all required fields." }
    }

    // Send email
    await transporter.sendMail({
      from: `"Anoka & Associates Website" <your-email@example.com>`,
      to: COMPANY_EMAIL,
      subject: `Contact Form: ${subject || "New Contact Form Submission"}`,
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Subject:</strong> ${subject || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error("Error sending contact form:", error)
    return { success: false, message: "Failed to send message. Please try again later." }
  }
}

export async function submitResume(formData: FormData) {
  try {
    const name = formData.get("name")
    const email = formData.get("email")
    const phone = formData.get("phone")
    const position = formData.get("position")
    const message = formData.get("message")
    const resume = formData.get("resume") as File

    // Validate required fields
    if (!name || !email || !resume) {
      return { success: false, message: "Please fill in all required fields and attach your resume." }
    }

    // In a real implementation, you would handle the file upload here
    // For example, save it to a storage service and get a URL
    // For this example, we'll just send the email without the attachment

    // Send email
    await transporter.sendMail({
      from: `"Anoka & Associates Website" <your-email@example.com>`,
      to: COMPANY_EMAIL,
      subject: `Resume Submission: ${position || "General Application"}`,
      html: `
        <h1>New Resume Submission</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Position:</strong> ${position || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "No additional message provided."}</p>
        <p><strong>Resume:</strong> Attached</p>
      `,
      // In a real implementation, you would add the attachment here
      // attachments: [
      //   {
      //     filename: resume.name,
      //     content: await resume.arrayBuffer(),
      //   },
      // ],
    })

    return { success: true }
  } catch (error) {
    console.error("Error sending resume:", error)
    return { success: false, message: "Failed to submit resume. Please try again later." }
  }
}
