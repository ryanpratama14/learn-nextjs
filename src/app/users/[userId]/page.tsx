import { getAllUsers, getUser, getUserPost } from "@/lib/users/route";
import Link from "next/link";
import { notFound } from "next/navigation";
import PostBody from "./components/PostBody";

type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({ params: { userId } }: Params) {
  // const userData: Promise<User> = getUser(userId);
  // const user: User = await userData;
  const user: User = await getUser(userId);

  if (!user?.name) {
    return {
      title: "User Not Found",
    };
  }
  return {
    title: user?.name,
    description: `This is the page of ${user?.name}`,
  };
}

const UserPage = async ({
  params: { userId },
}: Params): Promise<React.JSX.Element> => {
  // const userData: Promise<User> = getUser(userId);
  // const userPostsData: Promise<Post[]> = getUserPost(userId);
  const [user, userPosts]: [User, Post[]] = await Promise.all([
    getUser(userId),
    getUserPost({
      userId: userId,
    }),
  ]);
  if (!user?.name) return notFound();

  return (
    <article className="flex flex-col gap-8 p-normal">
      <header className="flex flex-col gap-4">
        <h4>This is {user?.name}</h4>
        <Link className="btn btn-red" href="/users">
          Back to Users
        </Link>
      </header>
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {userPosts?.map((e) => {
          return <PostBody posts={e} key={e?.id} />;
        })}
      </section>
    </article>
  );
};

export default UserPage;

export async function generateStaticParams() {
  const users: User[] = await getAllUsers();
  return users?.map((e) => {
    return { userId: e.id.toString() };
  });
}
