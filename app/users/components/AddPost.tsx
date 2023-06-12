"use client";
import { createPost } from "@/lib/users/route";
import { ChangeEvent, FormEvent, useState } from "react";
import { Icon } from "@iconify/react";

const initialValue: PostItems = {
  title: "",
  body: "",
  email: "",
  desc: "",
  userId: 1,
  agree: false,
};

export default function AddPost() {
  const [data, setData] = useState(initialValue);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (data.agree) {
      try {
        const res = await createPost(data);
        console.log(res);
        setData(initialValue);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 items-center justify-center w-full"
    >
      <input
        value={data.title}
        onChange={handleChange}
        name="title"
        placeholder="Title"
        type="text"
        required
      />
      <input
        value={data.body}
        onChange={handleChange}
        name="body"
        placeholder="Body"
        type="text"
        required
      />
      <input
        value={data.email}
        onChange={handleChange}
        name="email"
        placeholder="Email"
        type="email"
        required
      />
      <textarea
        rows={5}
        value={data.desc}
        onChange={handleChange}
        name="desc"
        placeholder="Desc"
        required
      />
      <section className="flex gap-2 items-center">
        <button
          type="button"
          className="p-0 text-primary border-2 border-primary"
          onClick={() => setData({ ...data, agree: !data.agree })}
        >
          <Icon
            width={25}
            icon="mdi:check-bold"
            className={`animate ${
              data.agree ? "scale-100" : "translate-y-2 scale-0"
            }`}
          />
        </button>
        <label>I agree on terms</label>
      </section>
      <button type="submit" className="btn-red">
        Submit
      </button>
    </form>
  );
}
