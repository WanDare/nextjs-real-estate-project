"use server";

import { LoginSchema } from "@/types/login-schema";
import { actionClient } from "@/lib/safe-action";
import bcrypt from "bcryptjs"; // keep if you want to hash-check static password
import { signIn } from "../auth";
import { headers } from "next/headers";

// Static user for testing
const staticUser = {
  email: "demo@example.com",
  passwordHash: await bcrypt.hash("password123", 10), // use plain "password123" as the test password
  role: "user",
};

export const LoginAccount = actionClient
  .schema(LoginSchema)
  .action(async ({ parsedInput: { email, password } }) => {
    // Simulate database query with static data
    if (email !== staticUser.email) {
      return { error: "Invalid email or password" };
    }

    const passwordMatch = await bcrypt.compare(
      password,
      staticUser.passwordHash
    );
    if (!passwordMatch) {
      return { error: "Invalid email or password" };
    }

    // Simulate checking admin route access
    const headersList = await headers();
    const referer = headersList.get("referer") || "";
    const isAdminRoute = referer.includes("/admin");

    if (isAdminRoute && staticUser.role !== "admin") {
      return { error: "You do not have permission to access the admin area" };
    }

    // Simulate sign-in without actual credentials provider
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    return { success: "Login successful" };
  });
