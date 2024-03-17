import { z } from "zod";

// CREATING AN OBJECT SCHEMA

export const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid Email Adress" })
    .min(3, { message: "Email must be at least of 3 chars." })
    .max(222, { message: "Email must not be more than 222 chars." }),

  password: z
    .string({ required_error: "password is required" })
    .trim()
    .min(7, { message: "password must be at least of 6 chars." })
    .max(1024, { message: "password must not be more than 1024 chars." }),
});

export const signupSchema = loginSchema.extend({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be at least of 3 chars." })
    .max(222, { message: "Name must not be more than 222 chars." }),

  phone: z
    .string({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be at least of 10 chars." })
    .max(20, { message: "Phone must not be more than 20 chars." }),

  isAdmin: z.boolean({ required_error: "isAdmin is required" }),
});
