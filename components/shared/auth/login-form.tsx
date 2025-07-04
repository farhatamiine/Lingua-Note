"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { loginAction } from "@/lib/actions/auth.action";
import { useActionState } from "react";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  const [state, action, isLoading] = useActionState(loginAction, {});

  return (
    <form
      action={action}
      className={cn("flex flex-col gap-6", className)}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            defaultValue={state.email}
            placeholder="m@example.com"
            required
          />
          {state.errors?.email && (
            <p className="text-red-500 text-sm">{state.errors?.email[0]}</p>
          )}
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input
            id="password"
            defaultValue={state.password}
            name="password"
            type="password"
            required
          />
          {state.errors?.password && (
            <p className="text-red-500 text-sm">{state.errors?.password[0]}</p>
          )}
        </div>
        <Button type="submit" disabled={isLoading} className="w-full">
          Login
        </Button>
      </div>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <Link href={"/signup"} className="underline underline-offset-4">
          Sign up
        </Link>
      </div>
    </form>
  );
}
