import React from "react";
import { PacmanLoader } from "react-spinners";

export default function loading(): React.JSX.Element {
  return (
    <section className="min-h-screen flex gap-2 items-center justify-center">
      <PacmanLoader color="#36d7b7" size={100} />
    </section>
  );
}
