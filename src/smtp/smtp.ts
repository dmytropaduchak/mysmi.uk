import { createTransport } from "nodemailer";

const host = process.env.SMTP_HOST!;
const port = parseInt(process.env.SMTP_PORT!);
const secure = false;
const user = process.env.SMTP_USER!;
const pass = process.env.SMTP_PASS!;
const auth = { user, pass };

export const smtp = createTransport({ host, port, secure, auth });