import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {
  const allPosts = await prisma.post.findMany();
  console.log(allPosts.length);
  return NextResponse.json({ allPosts: allPosts });
}
