import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { cloudinaryUploader } from "@/lib/cloudinaryUploader";

export async function GET(request, { params }) {
  const postData = await prisma.post.findMany({
    where: { route: params["post-type"] },
  });
  return NextResponse.json({ singlePage: postData });
}

export async function POST(request) {
  const body = await request.json();
  const image = await cloudinaryUploader(body.image);
  const userImage = await cloudinaryUploader(body.userImage);
  const date = new Date();
  const isoDate = date.toISOString();
  let result;

  try {
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
  } catch (err) {
    const result = err.message;
  }

  return NextResponse.json({ res: result });
}
