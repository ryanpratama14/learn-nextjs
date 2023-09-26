import { getAllUsers, getTokyoTime } from "@/lib/users/route";
import Link from "next/link";
import AddPost from "./components/AddPost";
import { Metadata } from "next";
import { Suspense } from "react";
import Logout from "@/components/Logout";

export const metadata: Metadata = {
  title: "Users",
};

const UsersPage = async (): Promise<React.JSX.Element> => {
  const users: User[] = await getAllUsers();
  const time: any = await getTokyoTime();

  return (
    <main className="gap-8 flex flex-col p-normal">
      <header className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-primary">Users List</h2>
        <Link href="/" className="btn btn-primary">
          Back to Main Page
        </Link>
        <h5>Tokyo time: {time.datetime}</h5>
      </header>
      <Suspense fallback={<p>Loading..</p>}>
        <section className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {users?.map((e) => {
            return (
              <div
                key={e?.id}
                className="p-4 flex flex-col gap-4 rounded-md bg-white"
              >
                <div className="flex flex-col gap-2">
                  <h5>{e?.name}</h5>
                  <p>{e?.username}</p>
                  <p>{e?.email}</p>
                </div>
                <div className="flex justify-end">
                  <Link className="btn btn-red" href={`/users/${e?.id}`}>
                    More information
                  </Link>
                </div>
              </div>
            );
          })}
        </section>
      </Suspense>
      <Logout />
      <AddPost />
    </main>
  );
};

export default UsersPage;
