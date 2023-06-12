import React from "react";
import { PacmanLoader } from "react-spinners";

export default function loading(): React.JSX.Element {
  return (
    <section className="min-h-screen flex gap-2 items-center justify-center">
      <PacmanLoader color="#1D7874" size={100} />
    </section>
  );
}
