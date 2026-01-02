import axios from "axios";

export async function testAPI() {
  const res = await axios.get("http://localhost:5000/api/ping");
  return res.data;
}
