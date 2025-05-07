"use server"

import { submitContactForm as submitContactFormAction } from "@/app/actions"

export async function submitContactForm(formData: FormData) {
  return await submitContactFormAction(formData)
}
