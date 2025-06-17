// app/routes/api/example/route.js
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type"); // 获取单个参数
  const response = await fetch(
    "https://stock.zsxg.cn/api/v2/index/list?type=" + type,
    {
      cache: "no-store",
    }
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
