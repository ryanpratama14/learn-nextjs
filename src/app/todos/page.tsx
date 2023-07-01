import { getTodos } from "@/lib/users/route";

export default async function Todos(): Promise<React.JSX.Element> {
  const todos: Todo[] = await getTodos();
  return (
    <main className="flex flex-col gap-2">
      {todos.map((todo) => {
        return (
          <section
            key={todo.id}
            className="p-4 rounded-md text-white bg-junglegreen"
          >
            <p>{todo.title}</p>
            <p>{todo.completed ? "Completed" : "Not Yet"}</p>
          </section>
        );
      })}
    </main>
  );
}
