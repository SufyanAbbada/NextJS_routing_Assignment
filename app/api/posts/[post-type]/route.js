import { NextResponse } from "next/server";
import { cloudinaryUploader } from "@/lib/cloudinaryUploader";
import prisma from "@/lib/prisma";

export async function GET(request, { params }) {
  console.log(params);
  return NextResponse.json({ res: params });
}

export async function POST(request) {
  const body = await request.json();
  const image = await cloudinaryUploader(body.image);
  const userImage = await cloudinaryUploader(body.userImage);
  const date = new Date();
  const isoDate = date.toISOString();

  const result = await prisma.post.create({
    data: {
      date: isoDate,
      title: body.title,
      image: image.secure_url,
      width: body.width,
      route: body.route,
      text: body.text,
      userImage: userImage.secure_url,
      userName: body.userName,
      spaces: body.spaces,
    },
  });
  console.log(result);
  return NextResponse.json({ res: result });
}
