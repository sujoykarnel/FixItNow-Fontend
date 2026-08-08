"use server";

import { LoginState, RegisterState } from "@/lib/types";
import { cookies } from "next/headers";
import jwt, { JwtPayload } from "jsonwebtoken";
import { redirect } from "next/navigation";

export const loginAction = async (
  prevState: LoginState,
  formData: FormData,
) => {
  const email = formData.get("email");
  const password = formData.get("password");

  const payload = {
    email,
    password,
  };



  const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await res.json();



  if (result.success) {
    const cookieStore = await cookies();

    cookieStore.set("accessToken", result.data.accessToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 1, // 1 day
      sameSite: "lax",
    });

    cookieStore.set("refreshToken", result.data.refreshToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7, // 7 days
      sameSite: "lax",
    });

    const decodedToken = jwt.decode(result.data.accessToken) as JwtPayload;

    if (decodedToken.role === "CUSTOMER") {
      redirect("/dashboard/customer");
    } else if (decodedToken.role === "TECHNICIAN") {
      redirect("/dashboard/technician");
    } else if (decodedToken.role === "ADMIN") {
      redirect("/dashboard/admin");
    }
  }

  return result;
};

export const registerAction = async (
  prevState: RegisterState,
  formData: FormData,
) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const phone = formData.get("phone");
  const role = formData.get("role");

  const payload = {
    name,
    email,
    password,
    phone,
    role,
  };



  const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await res.json();

  

  return result;
};
