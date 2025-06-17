export async function GET(request: Request, { params }) {
  const response = await fetch(
    "https://stock.zsxg.cn/api/v2/news/list?lastId=&limit=30&recommend=&type=2",
    { cache: "no-cache"}
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const result = await response.json();
  return new Response(JSON.stringify(result), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-store",
      Expires: "0",
    },
    status: 200,
  });
}
