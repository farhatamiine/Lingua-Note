"use server";
import {
  AuthActionState,
  createAccountSchema,
  loginSchema,
} from "@/types/validators";
import { createClient } from "../supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const loginAction = async (
  _prevState: AuthActionState,
  formData: FormData
): Promise<AuthActionState> => {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const parsed = loginSchema.safeParse({
    email,
    password,
  });

  if (!parsed.success) {
    return {
      email,
      password,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "page");
  redirect("/");
};

export const SignUpAction = async (
  _prevState: AuthActionState,
  formData: FormData
): Promise<AuthActionState> => {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const parsed = createAccountSchema.safeParse({
    email,
    password,
  });

  if (!parsed.success) {
    return {
      email,
      password,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const { error } = await supabase.auth.signUp({ email, password });

  if (error) {
    redirect("/error");
  }

  revalidatePath("/", "page");
  redirect("/");
};
