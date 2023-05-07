import { getUser, getUserPost } from "@/lib/users/route";
import Link from "next/link";
import { Suspense } from "react";

type Params = {
  params: {
    userId: string;
  };
};

const UserPage = async ({ params: { userId } }: Params) => {
  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPost(userId);
  const [user, userPosts] = await Promise.all([userData, userPostsData]);
  return (
    <section className="flex flex-col gap-8 p-normal">
      <div className="flex flex-col gap-4">
        <h4>This is {user?.name}</h4>
        <Link className="btn btn-red" href="/users">
          Back to Users
        </Link>
      </div>
      <Suspense fallback={<h3>Loading...</h3>}>
        <div className="grid grid-cols-3 gap-4">
          {userPosts?.map((e) => {
            return (
              <div
                key={e?.id}
                className="rounded-md px-6 py-4 bg-white flex flex-col gap-4"
              >
                <h5>{e?.title}</h5>
                <p>{e?.body}</p>
              </div>
            );
          })}
        </div>
      </Suspense>
    </section>
  );
};

export default UserPage;
