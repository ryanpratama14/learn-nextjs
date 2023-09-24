"use client";
import { SyncLoader } from "react-spinners";

export default function Loading() {
  return (
    <article className="min-h-screen flex items-center justify-center">
      <SyncLoader size={20} />
    </article>
  );
}
