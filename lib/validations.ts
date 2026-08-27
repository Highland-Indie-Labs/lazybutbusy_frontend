import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "ERROR: NAME REQUIRED. WE'RE LAZY, NOT PSYCHIC."),
  email: z.string().email("ERROR: THAT EMAIL LOOKS FAKE. TRY A REAL ONE."),
  company: z.string().optional(),
  budget: z.string().optional(),
  needs: z.array(z.enum(["web", "mobile", "automation", "unsure"])).default([]),
  message: z.string().min(1, "ERROR: DESCRIBE THE PROBLEM. ONE SENTENCE IS FINE."),
});

export type ContactInput = z.infer<typeof contactSchema>;
