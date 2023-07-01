import { NextResponse } from "next/server";

const api = process.env.NEXT_PUBLIC_API;

export async function GET() {
  const res = await fetch(`${api}/todos`);
  const todos: Todo[] = await res.json();
  return NextResponse.json(todos);
}
