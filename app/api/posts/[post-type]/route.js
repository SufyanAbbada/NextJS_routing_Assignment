import { cloudinaryUploader } from "@/lib/cloudinaryUploader";
const Post = require ('@/models').Post
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  console.log(params);
  return NextResponse.json({ res: params });
}

export async function POST(request) {
  const body = await request.json();
  // console.log(Post);
  // console.log(sequelize);
  // console.log(db);

  // const image = await cloudinaryUploader(body.image);
  // const userImage = await cloudinaryUploader(body.userImage);
  // console.log("imageURL", imageURL);
  // const newPost = await sequelize.create("Post", {
  //   title: body.title,
  //   date: body.date,
  //   image: "image",
  //   width: body.width,
  //   route: body.route,
  //   text: body.text,
  //   userImage: "userImage",
  //   userName: body.userName,
  //   spaces: body.spaces,
  // });
  // console.log(newPost);
  return NextResponse.json({ res: body });
}
