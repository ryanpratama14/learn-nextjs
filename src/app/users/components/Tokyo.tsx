"use client";

import { getTokyoTime, putPost } from "@/api/users/route";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";

export default function Tokyo() {
  const [data, setData] = useState<Post>({
    userId: 2,
    id: 2,
    title: "string",
    body: "string",
  });
  const { data: time } = useQuery<any>({
    queryKey: ["tokyo"],
    queryFn: () => getTokyoTime(),
  });

  const { mutateAsync: mutatePost } = useMutation({
    mutationFn: ({ body, userId }: { body: Post; userId: string }) =>
      putPost(body, userId),
  });
  return (
    <h5>
      Tokyo time: {time?.datetime}
      <button onClick={() => mutatePost({ body: data, userId: "12" })}></button>
    </h5>
  );
}
