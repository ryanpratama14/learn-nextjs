"use client";

import Input from "@/components/Input";
import { useState } from "react";

const initialData = {
  username: "kminchelle",
  password: "0lelplR",
};

export default function Login() {
  const [data, setData] = useState(initialData);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={data.username}
        name="username"
        onChange={handleChange}
        type="text"
      />
      <Input
        value={data.password}
        name="password"
        onChange={handleChange}
        type="password"
      />
    </form>
  );
}
