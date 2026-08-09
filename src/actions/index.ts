import { defineAction } from "astro:actions";
import { z } from "astro/zod";
import { submitForm } from "@/form/services/submit";

export const server = {
  contactForm: defineAction({
    input: z.object({
      email: z
        .string()
        .min(1, "Email is required")
        .pipe(z.email("Invalid email address")),
      message: z.string(),
    }),
    async handler({ email, message }) {
      const { duplicated, success, error } = await submitForm({
        email,
        message,
      });

      return {
        success,
        duplicated,
        error,
      };
    },
  }),
};
