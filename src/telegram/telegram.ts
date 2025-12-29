export const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
export const TELEGRAM_API = `https://api.telegram.org/bot${TELEGRAM_TOKEN}`;

const method = "POST";
const headers = {
  "Content-Type": "application/json",
};

export const send = async (data: any) => {
  const body = JSON.stringify(data);
  await fetch(`${TELEGRAM_API}/sendMessage`, { method, headers, body });
}