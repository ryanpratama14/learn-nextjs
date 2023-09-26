import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Fragment } from "react";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  if (!session || !session.user) {
    return redirect("/");
  }

  return <Fragment>{children}</Fragment>;
}
