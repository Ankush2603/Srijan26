const BASE_URL = process.env.NEXT_PUBLIC_RAG_BACKEND_URL;
const API_KEY_NAME = process.env.NEXT_PUBLIC_API_KEY_NAME ?? "";
const API_KEY_VALUE = process.env.NEXT_PUBLIC_API_KEY_VALUE ?? "";

export async function sendMessageToBot(
  query: string,
  history: { role: string; content: string }[]
) {
  const cleanHistory = history.map(({ role, content }) => ({ role, content }));

  const res = await fetch(`${BASE_URL}/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      [API_KEY_NAME]: API_KEY_VALUE,
    },
    body: JSON.stringify({ query, history: cleanHistory }),
  });

  if (!res.ok) throw new Error(`Server error: ${res.status}`);
  return res.json();
}