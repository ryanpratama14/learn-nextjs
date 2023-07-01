import { getTodos } from "@/lib/users/route";
import Link from "next/link";

export default async function Todos(): Promise<React.JSX.Element> {
  const todos: Todo[] = await getTodos();
  return (
    <main className="flex flex-col gap-12 items-center justify-center p-normal">
      <Link href="/" className="btn btn-primary">
        Back to Home
      </Link>
      <article className="grid grid-cols-3 gap-6">
        {todos.map((todo) => {
          return (
            <section
              key={todo.id}
              className="p-4 rounded-md text-black bg-white"
            >
              <p className="font-semibold">{todo.title}</p>
              <p>{todo.completed ? "Completed" : "Not Yet"}</p>
            </section>
          );
        })}
      </article>
    </main>
  );
}
