"use client";
import { createPost } from "@/lib/users/route";
import { ChangeEvent, FormEvent, useState } from "react";

const initialValue: PostItems = {
  title: "",
  body: "",
  userId: 1,
};

export default function AddPost() {
  const [data, setData] = useState(initialValue);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await createPost(data);
      console.log(res);
      setData(initialValue);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 items-center justify-center"
    >
      <input
        value={data.title}
        onChange={handleChange}
        name="title"
        placeholder="Title"
      />
      <input
        value={data.body}
        onChange={handleChange}
        name="body"
        placeholder="Body"
      />
      <button type="submit" className="bg-green-300">
        Submit
      </button>
    </form>
  );
}
