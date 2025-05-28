"use server";

import { RegisterSchema } from "@/types/register-schema";
import { actionClient } from "@/lib/safe-action";
import bcrypt from "bcryptjs";

// In-memory array to simulate a user database (cleared on each server restart)
const staticUsers: {
  email: string;
  passwordHash: string;
  firstName: string;
  lastName: string;
  location: string;
  role: string;
  skillLevel: string;
}[] = [];

export const RegisterAccount = actionClient
  .schema(RegisterSchema)
  .action(
    async ({
      parsedInput: {
        email,
        password,
        lastName,
        firstName,
        location,
        role,
        skillLevel,
      },
    }) => {
      const existingUser = staticUsers.find((user) => user.email === email);
      if (existingUser) {
        return {
          error: "Looks like you already have an account. Please log in.",
        };
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      // Add user to static array
      staticUsers.push({
        email,
        passwordHash: hashedPassword,
        firstName,
        lastName,
        location,
        role,
        skillLevel,
      });

      return { success: "Account created successfully" };
    }
  );
