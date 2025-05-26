import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function GET() {
  // 模拟从数据库获取用户数据
  const users = await prisma.users.findMany();
  // 返回响应
  return NextResponse.json(users);
}

export async function POST(request: Request) {
  // 解析请求体
  const body = await request.json();

  // 处理 POST 请求逻辑（例如，创建新用户）
  console.log("Received data:", body);

  // 返回响应
  return NextResponse.json(
    { message: "User created successfully" },
    { status: 201 }
  );
}
