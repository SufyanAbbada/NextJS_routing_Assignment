import { NextResponse } from "next/server"

export async function GET(request) {
  console.log(request.url)
  // const res = await fetch(`https://data.mongodb-api.com/product/${id}`, {
  //   headers: {
  //     "Content-Type": "application/json",
  //     "API-Key": process.env.DATA_API_KEY,
  //   },
  // })
  // const product = await res.json()

  return NextResponse.json({ res: 'Welcome' })
}
