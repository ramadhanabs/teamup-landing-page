// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { FormValues } from "@/composites/contact-us/ContactForm";
import type { NextApiRequest, NextApiResponse } from "next";
import { transporter, mailOptions } from "../../lib/nodemailer";

type Data = {
  message: string;
};

interface ExtendedNextApiRequest extends NextApiRequest {
  body: FormValues;
}

export default async function handler(
  req: ExtendedNextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "POST") {
    const data = req.body;
    if (!data.name || !data.email || !data.phone) {
      return res.status(400).json({ message: "Fill name, email, and phone" });
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: "New Message from Teamup Landing Page",
        text: `
        Name: ${data.name},
        Email: ${data.email},
        Phone: ${data.phone},
        Company: ${data.company},
        Service: ${data.service},
        Description Project: ${data.project_description}
        `
      });
    } catch (error: any) {
      console.error(error);
      return res.status(400).json({ message: error.message });
    }
  }
  res.status(200).json({ message: "Success" });
}
