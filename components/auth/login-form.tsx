"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { LoginSchema } from "@/types/login-schema";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const DUMMY_USER = {
  email: "demo@example.com",
  password: "password123",
};

const LoginForm = () => {
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setLoading(true);

    setTimeout(() => {
      if (
        values.email === DUMMY_USER.email &&
        values.password === DUMMY_USER.password
      ) {
        toast.success("Login successful!");
        // Here you could call a context or set localStorage for a demo session
        router.back();
        setTimeout(() => {
          if (window.location.pathname === "/login") {
            router.push("/");
          }
        }, 400);
      } else {
        toast.error("Invalid email or password.");
      }

      setLoading(false);
    }, 1000);
  };

  return (
    <div className="p-8 rounded-lg shadow-md max-w-md w-full mx-auto bg-[#313131]">
      <h3 className="text-3xl font-bold text-center mb-2">Welcome Back</h3>
      <p className="text-sm text-center mb-8">
        👋 Please enter your credentials to log in
      </p>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter your email"
                    type="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Enter your password"
                    type="password"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full" type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Log In"}
          </Button>
        </form>
      </Form>
      <p className="text-center text-sm mt-6">
        Don't have an account?{" "}
        <a href="/register" className="text-blue-600 hover:underline">
          Sign up
        </a>
      </p>
      <p className="text-center text-sm mt-6">
        Let's back to home?{" "}
        <Link href="/" className="text-blue-600 hover:underline">
          Home
        </Link>
      </p>
      {/* For demo/testing, show hint */}
      <div className="mt-6 bg-blue-50 text-blue-800 rounded p-2 text-xs text-center">
        <div>
          Demo user: <b>{DUMMY_USER.email}</b>
        </div>
        <div>
          Password: <b>{DUMMY_USER.password}</b>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
