export async function GET(request: Request, { params }) {
  const response = await fetch(
    "https://stock.zsxg.cn/api/v2/capital/realTime?codes=000001.SH,399001.SZ,399006.SZ,399102.SZ,000688.SH,000698.SH,000985.CSI,000016.SH,000300.SH,000852.SH,HSI.HI,HSTECH.HI",
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
