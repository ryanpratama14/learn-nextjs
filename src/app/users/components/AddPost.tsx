"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { createPost } from "@/lib/users/route";

const initialValue: PostItems = {
  title: "",
  body: "",
  email: "",
  desc: "",
  date: "",
  userId: Date.now(),
  applied: false,
};

export default function AddPost(): React.JSX.Element {
  const [data, setData] = useState(initialValue);
  const [newData, setNewData] = useState<PostItems>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;
    setData({ ...data, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await createPost(data);
      setNewData(res);
      setData(initialValue);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center gap-12">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 items-center justify-center w-full md:w-[50%] lg:w-[35%] xl:w-[25%]"
      >
        <input
          value={data.title}
          onChange={handleChange}
          placeholder="Title"
          name="title"
          type="text"
          required
        />
        <input
          value={data.body}
          onChange={handleChange}
          placeholder="Body"
          name="body"
          type="text"
          required
        />
        <input
          value={data.email}
          onChange={handleChange}
          placeholder="Email"
          name="email"
          type="email"
          required
        />
        <input
          value={data.date}
          onChange={handleChange}
          name="date"
          type="date"
          required
          className="iOS !text-left"
        />
        <textarea
          value={data.desc}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setData({ ...data, desc: e.target.value })
          }
          placeholder="Description"
          required
          rows={5}
        />
        <section className="relative flex gap-2 items-center">
          <input
            checked={data.applied}
            onChange={handleChange}
            name="applied"
            type="checkbox"
            className="absolute w-full left-0 z-10 opacity-0 cursor-pointer"
          />
          <div className="border-2 border-primary text-primary rounded-md">
            <Icon
              width={20}
              icon="mdi:check-bold"
              className={`animate ${
                data.applied ? "scale-100" : "translate-y-2 scale-0"
              }`}
            />
          </div>
          <label>Did you applied before?</label>
        </section>
        <button type="submit" className="btn-primary">
          Submit
        </button>
      </form>
      {newData ? (
        <section className="flex p-3 flex-col gap-2 rounded-md border-2 border-primary">
          <h4 className="text-primaryDarker">New Data Submitted</h4>
          <div className="flex flex-col gap-1 text-junglegreenDarker">
            <p>title: {newData.title}</p>
            <p>body: {newData.body}</p>
            <p>date: {newData.date}</p>
            <p>
              {newData.applied
                ? "Applied before"
                : "Applied for the first time"}
            </p>
            <p>email: {newData.email}</p>
            <p>desc: {newData.desc}</p>
            <p>user id: {newData.userId}</p>
          </div>
        </section>
      ) : null}
    </section>
  );
}
