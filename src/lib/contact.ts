import { z } from "zod";
import { SITE } from "./site";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please enter your full name" })
    .max(100, { message: "Name must be under 100 characters" }),
  email: z
    .string()
    .trim()
    .min(1, { message: "Please enter your email address" })
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be under 255 characters" }),
  subject: z
    .string()
    .trim()
    .min(3, { message: "Please add a subject" })
    .max(150, { message: "Subject must be under 150 characters" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Message should be at least 10 characters" })
    .max(2000, { message: "Message must be under 2000 characters" }),
});

export type ContactInput = z.infer<typeof contactSchema>;

/** Builds a mailto: link addressed to the company with the visitor's message pre-filled. */
export function buildContactMailto(input: ContactInput): string {
  const body = `${input.message}\n\n— ${input.name}\n${input.email}`;
  return `mailto:${SITE.email}?subject=${encodeURIComponent(input.subject)}&body=${encodeURIComponent(body)}`;
}
