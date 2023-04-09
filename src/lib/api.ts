import { FormValues } from "@/composites/contact-us/ContactForm";

export const sendContactForm = async (data: FormValues) => {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });
    return res;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
