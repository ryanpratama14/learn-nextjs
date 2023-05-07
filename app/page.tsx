import Link from "next/link";

const Home = () => {
  return (
    <main>
      <div className="flex justify-center flex-col gap-4 items-center min-h-screen">
        <h1 className="text-primary">WELCOME TO MY FIRST NEXT APP</h1>
        <Link className="btn btn-primary" href="/users">
          See Users
        </Link>
      </div>
    </main>
  );
};

export default Home;
