import Link from "next/link";
import React from "react";

export default function Home(): React.JSX.Element {
  return (
    <main>
      <header className="flex justify-center flex-col gap-4 items-center min-h-screen">
        <h1 className="text-primary">WELCOME TO MY FIRST NEXT APP</h1>
        <Link className="btn btn-primary" href="/users">
          See Users
        </Link>
      </header>
    </main>
  );
}
