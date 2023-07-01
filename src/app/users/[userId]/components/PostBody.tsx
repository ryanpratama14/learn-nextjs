"use client";

import Input from "@/components/Input";
import TextArea from "@/components/TextArea";
import { deletePost, getComments, putPost } from "@/lib/users/route";
import { useState } from "react";
import { toast } from "react-hot-toast";

type Params = {
  posts: Post;
};

export default function PostBody({ posts }: Params): React.JSX.Element {
  const [data, setData] = useState(posts);
  const [comments, setComments] = useState<CommentItems[]>([]);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isDirty, setIsDirty] = useState<boolean>(false);
  const [seeMore, setSeeMore] = useState<boolean>(false);
  const filteredComments = seeMore ? comments : comments.slice(0, 2);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    setIsDirty(value !== posts[name]);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isDirty) {
      try {
        await putPost(data, data.id.toString());
        setIsEdit(false);
        setIsDirty(false);
        toast.success("Saved");
      } catch (error) {
        console.log(error);
      }
    } else {
      setIsEdit(false);
      toast.success("Canceled");
    }
  };

  const handleDelete = async () => {
    try {
      await deletePost(posts.id.toString());
      toast.success(
        "Deleted (doesn't effect the stored data, but the request was succesfully called)"
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleComment = async () => {
    try {
      const res = await getComments(posts.id.toString());
      setComments(res);
      toast.success("Comments showed");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <article className="rounded-md px-6 py-4 flex flex-col gap-4 bg-white">
      {isEdit ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            value={data.title}
            name="title"
            onChange={handleChange}
            type="text"
          />
          <TextArea
            rows={10}
            value={data.body}
            name="body"
            onChange={handleChange}
          />
          <button
            type="submit"
            className={`text-white ${isDirty ? "btn-primary" : "btn-red"}`}
          >
            {isDirty ? "Save Edit" : "Cancel"}
          </button>
        </form>
      ) : (
        <section className="flex flex-col gap-4">
          <h5>{data.title}</h5>
          <p className="whitespace-pre-line">{data.body}</p>
          <section className="flex flex-col gap-2">
            <nav className="flex flex-wrap gap-2">
              <button className="btn-secondary" onClick={() => setIsEdit(true)}>
                Edit
              </button>
              <button className="btn-red" onClick={handleDelete}>
                Delete
              </button>
            </nav>
            {comments.length ? (
              <article className="flex flex-col gap-2">
                <h5 className="italic">Comments</h5>
                {filteredComments.map((e) => {
                  return (
                    <section
                      key={e.id}
                      className="flex flex-col gap-1 p-2 bg-gray-300 rounded-md"
                    >
                      <p>{e.name}</p>
                      <p>{e.email}</p>
                    </section>
                  );
                })}
                <nav className="flex gap-2">
                  <button
                    className="btn-secondary"
                    onClick={() => setSeeMore(!seeMore)}
                  >
                    {seeMore ? "Show less" : "..."}
                  </button>
                  <button className="btn-red" onClick={() => setComments([])}>
                    Hide
                  </button>
                </nav>
              </article>
            ) : (
              <button className="btn-junglegreen" onClick={handleComment}>
                Show Comments
              </button>
            )}
          </section>
        </section>
      )}
    </article>
  );
}
