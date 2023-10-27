import { createPost } from "@/api/users/route";

export default function AddPost2(): React.JSX.Element {
  const handleSubmit = async (e: FormData) => {
    "use server";
    try {
      const title = e.get("title") as string;
      const body = e.get("body") as string;
      const email = e.get("email") as string;
      const desc = e.get("desc") as string;
      const date = e.get("date") as string;

      const data: PostItems = {
        title: title,
        body: body,
        email: email,
        desc: desc,
        date: date,
        userId: Date.now(),
        applied: false,
      };
      const res = await createPost(data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="flex flex-col items-center justify-center gap-12 w-full">
      <form
        action={handleSubmit}
        className="flex flex-col gap-4 items-center justify-center w-full md:w-[50%] lg:w-[35%] xl:w-[25%]"
      >
        <input placeholder="Tom & Jerry" name="title" type="text" required />
        <input
          placeholder="Tom & Jerry This Night"
          name="body"
          type="text"
          required
        />
        <input
          placeholder="tomjerry@outlook.com"
          name="email"
          type="email"
          required
        />
        <input name="date" type="date" required />
        <textarea
          name="desc"
          placeholder="It begins when..."
          required={true}
          rows={5}
        />
        <section className="relative flex flex-row-reverse gap-2 items-center">
          <label htmlFor="applied">Did you applied before?</label>
          <input
            id="applied"
            name="applied"
            type="checkbox"
            className="absolute w-full left-0 z-10 cursor-pointer"
          />
        </section>
        <button type="submit" className="btn-primary">
          Submit
        </button>
      </form>
    </section>
  );
}
