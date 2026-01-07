import axios from "axios";
let token: string | null = null;
let tokenExpiry = 0;

export async function getAmadeusToken() {
  if (token && Date.now() < tokenExpiry) {
    return token;
  }

  const response = await axios.post(
    "https://test.api.amadeus.com/v1/security/oauth2/token",
    new URLSearchParams({
      grant_type: "client_credentials",
      client_id: process.env.AMADEUS_API_KEY!,
      client_secret: process.env.AMADEUS_API_SECRET!,
    }),
    {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    }
  );
  token = response.data.access_token;
  tokenExpiry = Date.now() + response.data.expires_in * 1000;

  return token;
}
