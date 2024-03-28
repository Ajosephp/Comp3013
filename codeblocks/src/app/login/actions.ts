"use server";

import { db } from "@/db";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;
  try {
    const user = await db.user.findFirstOrThrow({
      where: {
        username: username,
        password: password,
      },
    });
    cookies().set("user_id", String(user.id));
  } catch (error) {
    redirect("/login?error=Invalid%20Credentials");
  }
  redirect("/");
}
