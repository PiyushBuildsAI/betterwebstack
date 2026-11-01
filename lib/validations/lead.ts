import { z } from "zod";

export const leadSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z
    .string()
    .trim()
    .min(8, "Enter a valid phone number")
    .max(20)
    .regex(/^[+0-9()\s-]+$/, "Enter a valid phone number"),
  email: z.string().trim().max(160).optional().or(z.literal("")),
  website: z.string().trim().max(200).optional().or(z.literal("")),
  businessType: z.string().trim().max(80).optional().or(z.literal("")),
  budget: z.string().trim().max(80).optional().or(z.literal("")),
  timeline: z.string().trim().max(80).optional().or(z.literal("")),
  goal: z.string().trim().max(400).optional().or(z.literal("")),
  message: z.string().trim().max(1200).optional().or(z.literal("")),
  source: z.string().trim().min(1).max(80),
  // Honeypot: real users never fill this in. Length-capped instead of empty so
  // submissions reach the route and can be answered with a silent success.
  company: z.string().trim().max(200).optional(),
  meta: z
    .record(z.string(), z.union([z.string(), z.number(), z.boolean()]))
    .optional(),
});

export type LeadValues = z.infer<typeof leadSchema>;

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
}

export function isValidPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}
