import { z } from "zod";
export const UserFormValidation = z.object({
  name: z.string().trim().min(3, {
    message: "Name must be atleast 3 character",
  }),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\+\d{1,14}$/, "Invalid phone number"),
});
