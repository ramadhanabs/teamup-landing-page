import nodemailer from "nodemailer";

const user = process.env.EMAIL;
const pass = process.env.EMAIL_PASS;
const emailTeamup = process.env.EMAIL_TEAMUP;
const isProduction = process.env.NODE_ENV === "production";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user,
    pass
  }
});

export const mailOptions = {
  from: user,
  to: isProduction ? emailTeamup : user
};
