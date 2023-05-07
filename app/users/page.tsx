import { getAllUsers } from "@/lib/users/route";
import Link from "next/link";

export const metadata = {
  title: "Users",
};

const UsersPage = async () => {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;
  return (
    <section className="gap-8 flex flex-col p-normal">
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-primary">Users List</h2>
        <Link href="/" className="btn-primary">
          Back to Main Page
        </Link>
      </div>
      <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
                <Link className="btn-red" href={`/users/${e?.id}`}>
                  More information
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default UsersPage;
