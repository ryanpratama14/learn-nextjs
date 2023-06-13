"use client";

import { putPost } from "@/lib/users/route";
import React, { useState } from "react";
import { toast } from "react-hot-toast";

type Params = {
  posts: Post;
};

export default function PostBody({ posts }: Params): React.JSX.Element {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const [data, setData] = useState<Post>(posts);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDirty(true);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isDirty) {
      try {
        await putPost(data, data.id.toString());
        setIsEdit(false);
        toast.success("Saved");
      } catch (error) {
        console.log(error);
      }
    } else {
      setIsEdit(false);
      toast.success("Canceled");
    }
  };

  return (
    <article className="rounded-md px-6 py-4 bg-white">
      {isEdit ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            value={data.title}
            name="title"
            onChange={handleChange}
            type="text"
          />
          <input
            value={data.body}
            name="body"
            onChange={handleChange}
            type="text"
          />
          <button
            type="submit"
            className={`text-white ${isDirty ? "bg-primary" : "bg-red"}`}
          >
            {isDirty ? "Save Edit" : "Cancel"}
          </button>
        </form>
      ) : (
        <section className="flex flex-col gap-4">
          <h5>{data.title}</h5>
          <p>{data.body}</p>
          <button className="btn-secondary" onClick={() => setIsEdit(true)}>
            Edit Post
          </button>
        </section>
      )}
    </article>
  );
}
