export const TELEGRAM_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;
export const TELEGRAM_API = `https://api.telegram.org/bot${TELEGRAM_TOKEN}`;

const method = "POST";
const headers = {
  "Content-Type": "application/json",
};

export const sendMessage = async (data: any) => {
  const body = JSON.stringify(data);
  const response = await fetch(`${TELEGRAM_API}/sendMessage`, { method, headers, body });
  const responseJson = await response.json();
  return responseJson
}

export const editMessage = async (data: any) => {
  const body = JSON.stringify(data);
  await fetch(`${TELEGRAM_API}/editMessageText`, { method, headers, body });
}

export const editMessageAcknowledge = async (data: any) => {
  const body = JSON.stringify(data);
  await fetch(`${TELEGRAM_API}/answerCallbackQuery`, { method, headers, body });
} 
