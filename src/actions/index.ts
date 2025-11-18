import { ActionError, defineAction } from "astro:actions";
import { z } from "astro:schema";
import { submitForm } from "@/form/services/submit";

export const server = {
  contactForm: defineAction({
    input: z.object({
      email: z
        .string()
        .min(1, "Email is required")
        .email("Invalid email address"),
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
