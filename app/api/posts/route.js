import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {
  const allPosts = await prisma.post.findMany();
  return NextResponse.json({ allPosts: allPosts });
}
