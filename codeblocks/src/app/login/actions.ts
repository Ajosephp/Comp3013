"use server";

import { db } from "@/db";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
  try {
    const user = await db.user.findFirstOrThrow({
      where: {
        username: formData.get("username") as string,
        password: formData.get("password") as string,
      },
    });
    cookies().set("user_id", String(user.id));
  } catch (error) {
    console.log("User not found");
    redirect("/login?error=Invalid%20Credentials");
  }
  redirect("/");
}
