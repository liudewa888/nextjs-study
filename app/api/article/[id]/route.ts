// app/routes/api/example/route.js
export async function GET(request: Request, { params }) {
  const { id } = params;
  const response = await fetch(
    "https://stock.zsxg.cn/api/v2/news/jh/get?id=" + id
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const result = await response.json();
  return new Response(JSON.stringify(result), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}
