import { z } from "zod";

export const userSchema = z
  .object({
    name: z
      .string()
      .min(3, "El nombre debe tener al menos 3 caracteres de longitud")
      .max(200, "El nombre debe tener como máximo 200 caracteres"),
    email: z.string().email("Por favor, ingrese un correo válido"),
    password: z
      .string()
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/, {
        message:
          "La contraseña debe contener al menos una letra minúscula, una letra mayúscula y un dígito",
      }),
    confirmPassword: z
      .string()
      .min(6, "La contraseña debe tener al menos 6 caracteres"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "contraseña no coinsiden",
    path: ["confirmPassword"],
  });

  export const loginSchema = z.object({
    email: z.string().email({
      message: "Email is required"
    }),
    password: z.string().min(1, {
      message: "Password is required"
    }),
  });

