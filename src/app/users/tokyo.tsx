"use client";

import { getTokyoTime } from "@/api/users/route";
import { useQuery } from "@tanstack/react-query";

export default function Tokyo() {
  const { data: time } = useQuery<any>(["tokyo"], () => getTokyoTime());
  return <h5>Tokyo time: {time?.datetime}</h5>;
}
