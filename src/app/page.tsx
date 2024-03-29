import Login from "@/components/Login";
import Link from "next/link";
import AddPost2 from "./users/components/AddPost2";

type Props = {
  searchParams?: Record<"callbackUrl" | "error", string>;
};

export default function Home(props: Props): React.JSX.Element {
  return (
    <main className="flex justify-center flex-col gap-4 items-center min-h-screen px-normal">
      <h1 className="text-center text-primary">WELCOME TO MY FIRST NEXT APP</h1>
      <Link className="btn btn-primary" href="/users">
        See Users
      </Link>
      <Link className="btn btn-primary" href="/todos">
        See Todos
      </Link>
      <Login
        error={props.searchParams?.error}
        callbackUrl={props.searchParams?.callbackUrl}
      />
      <AddPost2 />
    </main>
  );
}
