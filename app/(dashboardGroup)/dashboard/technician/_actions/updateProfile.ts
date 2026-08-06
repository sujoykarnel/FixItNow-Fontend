/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { getAccessToken } from "@/service/accessToken";

export const updateTechnicianProfile = async (
  prevState: any,
  formData: FormData,
) => {
  try {
    const accessToken = await getAccessToken();

    const payload = {
      bio: formData.get("bio"),
      experience: Number(formData.get("experience")),
      location: formData.get("location"),
      availableStart: formData.get("availableStart"),
      availableEnd: formData.get("availableEnd"),
    };

    const res = await fetch(
      `${process.env.BACKEND_API_URL}/api/technicians/profile`,
      {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      },
    );

    const data = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: data.message || "Failed to update profile",
      };
    }

    return {
      success: true,
      message: "Profile updated successfully",
    };
    
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    };
  }
};
