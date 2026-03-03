"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface SignupFormData {
  name: string;
  email: string;
  instagram: string;
  weddingsPerYear: string;
  frustration?: string;
}

interface SubmitResult {
  success: boolean;
  message: string;
}

export async function submitSignup(
  data: SignupFormData
): Promise<SubmitResult> {
  // Validate required fields
  if (!data.name?.trim()) {
    return { success: false, message: "Name is required" };
  }
  if (!data.email?.trim()) {
    return { success: false, message: "Email is required" };
  }
  if (!data.instagram?.trim()) {
    return { success: false, message: "Instagram handle is required" };
  }
  if (!data.weddingsPerYear) {
    return { success: false, message: "Weddings per year is required" };
  }

  const ownerEmail = process.env.OWNER_EMAIL;
  if (!ownerEmail) {
    return { success: false, message: "Server configuration error" };
  }

  try {
    const emailContent = `
New Zebri Beta Signup
=====================

Name: ${data.name}
Email: ${data.email}
Instagram: @${data.instagram}
Weddings per Year: ${data.weddingsPerYear}

Admin Frustration Note:
${data.frustration || "(No additional notes)"}

---
Timestamp: ${new Date().toISOString()}
    `.trim();

    await resend.emails.send({
      from: "Zebri <noreply@zebri.com>",
      to: ownerEmail,
      replyTo: data.email,
      subject: `New Beta Signup: ${data.name}`,
      text: emailContent,
      html: `
        <html>
          <body style="font-family: system-ui, -apple-system, sans-serif; color: #18181b; line-height: 1.6;">
            <h2 style="color: #18181b; margin-bottom: 20px;">New Zebri Beta Signup</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: 600; width: 150px;">Name:</td>
                <td style="padding: 8px 0;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600;">Email:</td>
                <td style="padding: 8px 0;"><a href="mailto:${data.email}">${data.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600;">Instagram:</td>
                <td style="padding: 8px 0;">@${data.instagram}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600;">Weddings/Year:</td>
                <td style="padding: 8px 0;">${data.weddingsPerYear}</td>
              </tr>
            </table>
            ${
              data.frustration
                ? `
            <h3 style="color: #18181b; margin-top: 20px; margin-bottom: 10px;">Admin Frustration Note:</h3>
            <p style="background-color: #f4f4f5; padding: 12px; border-radius: 6px; white-space: pre-wrap;">${data.frustration}</p>
            `
                : ""
            }
            <p style="color: #71717a; font-size: 12px; margin-top: 20px;">Timestamp: ${new Date().toISOString()}</p>
          </body>
        </html>
      `,
    });

    return {
      success: true,
      message: "Welcome to Zebri! Check your email for next steps.",
    };
  } catch (error) {
    console.error("Signup error:", error);
    return { success: false, message: "Something went wrong. Please try again." };
  }
}
