"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import { Icon } from "@iconify/react";
import { createPost } from "@/lib/users/route";

const initialValue: PostItems = {
  title: "",
  body: "",
  email: "",
  desc: "",
  date: "",
  userId: 1,
  applied: false,
};

export default function AddPost(): React.JSX.Element {
  const [data, setData] = useState(initialValue);
  const [newData, setNewData] = useState<PostItems>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, type, value, checked } = e.target;
    setData({ ...data, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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
        className="flex flex-col gap-4 items-center justify-center w-full md:w-[50%] xl:w-[30%]"
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
          placeholder="Date"
          name="date"
          type="date"
          required
          className="iOS !text-left"
        />
        <textarea
          value={data.desc}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setData({ ...data, desc: e.target.value })
          }
          placeholder="Description"
          required
          rows={5}
        />
        <section className="flex gap-2 items-center">
          <div className="relative border-2 border-primary text-primary rounded-md">
            <input
              checked={data.applied}
              onChange={handleChange}
              name="applied"
              type="checkbox"
              className="absolute w-full h-full z-10 opacity-0 cursor-pointer"
            />
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
        <section className="flex p-3 flex-col rounded-md border-2 border-primary text-primaryDarker">
          <h4>New Data Submitted</h4>
          <p>
            {newData.title}, {newData.body}, {newData.date},{" "}
            {newData.applied ? "Applied before" : "Applied for the first time"},{" "}
            {newData.email}, {newData.desc}
          </p>
        </section>
      ) : null}
    </section>
  );
}
