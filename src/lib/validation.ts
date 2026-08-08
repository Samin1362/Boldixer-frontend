import { z } from "zod";

/** Quote request form. Field names match the design's placeholders. */
export const quoteSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name."),
  email: z.email("Please enter a valid email address."),
  subject: z.string().trim().min(2, "Please enter a subject."),
  phone: z
    .string()
    .trim()
    .min(6, "Please enter a phone number.")
    .regex(/^[+\d][\d\s()-]*$/, "Please enter a valid phone number."),
  /** Honeypot — must stay empty. Hidden from real users. */
  company: z.string().max(0).optional().or(z.literal("")),
});

export type QuoteInput = z.infer<typeof quoteSchema>;

/** Newsletter signup in the footer (Phase 12). */
export const subscribeSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name."),
  email: z.email("Please enter a valid email address."),
  company: z.string().max(0).optional().or(z.literal("")),
});
