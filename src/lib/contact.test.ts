import { describe, expect, it } from "vitest";
import { buildContactMailto, contactSchema } from "./contact";
import { SITE } from "./site";

const valid = {
  name: "Priya Kumar",
  email: "priya@example.com",
  subject: "Website enquiry",
  message: "I would like a portfolio website.",
};

describe("contact form", () => {
  it("accepts a complete message", () => {
    expect(contactSchema.safeParse(valid).success).toBe(true);
  });

  it("rejects an invalid email address", () => {
    expect(contactSchema.safeParse({ ...valid, email: "not-an-email" }).success).toBe(false);
  });

  it("rejects an empty message", () => {
    expect(contactSchema.safeParse({ ...valid, message: "   " }).success).toBe(false);
  });

  it("addresses the email to the company inbox", () => {
    expect(buildContactMailto(valid).startsWith("mailto:kavingm2007@gmail.com?")).toBe(true);
  });
});

describe("contact details", () => {
  it("uses the supplied phone and WhatsApp number", () => {
    expect(SITE.phoneHref).toBe("tel:+919524165106");
    expect(SITE.whatsappHref).toBe("https://wa.me/919524165106");
  });
});
