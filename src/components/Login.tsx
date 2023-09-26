"use client";

import Input from "@/components/Input";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

const initialData = {
  username: "kminchelle",
  password: "0lelplR",
};

export default function Login() {
  const router = useRouter();
  const [data, setData] = useState(initialData);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      username: data.username,
      password: data.password,
      redirect: false,
    });

    if (!res?.error) {
      router.push("/users");
    } else {
      toast.error("Username or password incorrect");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center flex-col gap-4"
    >
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
      <button className="mt-2 btn btn-secondary" type="submit">
        Login
      </button>
    </form>
  );
}
