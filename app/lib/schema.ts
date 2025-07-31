import { z } from 'zod'

export const signInSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, { message: 'Password must be at least 6 characters long' })
})

export const signUpSchema = z
  .object({
    email: z.string().email('Invalid email address'),
    name: z.string().min(2, { message: 'Name must be at least 2 characters long' }),
    password: z.string().min(6, { message: 'Password must be at least 6 characters long' }),
    confirmPassword: z.string().min(6, { message: 'Confirm password must be at least 6 characters long' })
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match"
  })
