"use client";

import Input from "@/components/Input";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const initialData = {
  username: "kminchelle",
  password: "0lelplR",
};

export default function Login() {
  const router = useRouter();
  const [data, setData] = useState(initialData);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        username: data.username,
        password: data.password,
        redirect: false,
      });
      const resp = await fetch(`https://dummyjson.com/auth/login`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      const user = await resp.json();
      console.log(user)
      if (typeof window !== "undefined") {
        localStorage.setItem("token", user.token);
      }

      if (res?.ok) {
        router.push("/users");
      }
    } catch (error) {
      console.log(error);
    }
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
      <button type="submit">Login</button>
    </form>
  );
}
