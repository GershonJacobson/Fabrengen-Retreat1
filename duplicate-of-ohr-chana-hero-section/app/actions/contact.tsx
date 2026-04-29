"use server"

export async function sendContactEmail(formData: FormData) {
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const message = formData.get("message") as string

  // TODO: Implement email sending using a service like Resend
  // For now, we'll log the form data
  console.log("[v0] Contact form submission:", {
    firstName,
    lastName,
    email,
    phone,
    message,
    to: "Gavrielkollin@gmail.com",
  })

  // Simulate email sending delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // In production, you would use a service like Resend:
  // const { Resend } = require('resend')
  // const resend = new Resend(process.env.RESEND_API_KEY)
  //
  // await resend.emails.send({
  //   from: 'contact@fabrengenretreat.com',
  //   to: 'Gavrielkollin@gmail.com',
  //   subject: `New Contact Form Submission from ${firstName} ${lastName}`,
  //   html: `
  //     <h2>New Contact Form Submission</h2>
  //     <p><strong>Name:</strong> ${firstName} ${lastName}</p>
  //     <p><strong>Email:</strong> ${email}</p>
  //     <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
  //     <p><strong>Message:</strong></p>
  //     <p>${message}</p>
  //   `
  // })

  return { success: true }
}
