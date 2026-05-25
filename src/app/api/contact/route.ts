import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {

    const body = await req.json();

    const { name, phone, message } = body;

    console.log("FORM DATA:", body);

    const transporter = nodemailer.createTransport({

      host: "smtp.mail.yahoo.com",

      port: 465,

      secure: true,

      auth: {
        user: "hiteck_packers@yahoo.com",

        pass: "omcpbhzvbonmiruy",
      },

    });

    const info = await transporter.sendMail({

      from: "hiteck_packers@yahoo.com",

      to: "hiteck_packers@yahoo.com",

      subject: "New Customer Inquiry - Hiteck Transport",

      html: `
        <h2>New Customer Inquiry</h2>

        <p><strong>Name:</strong> ${name}</p>

        <p><strong>Phone:</strong> ${phone}</p>

        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    console.log("EMAIL SENT:", info);

    return NextResponse.json({
      success: true,
    });

  } catch (error: any) {

    console.log("EMAIL ERROR:", error);

    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}