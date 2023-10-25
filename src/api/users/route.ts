import { deleteData, getData, patchData, postData } from "@/api/api";

export const getTokyoTime = async () => {
  const res = await fetch(`https://worldtimeapi.org/api/timezone/Asia/Tokyo`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch time data");
  return res.json();
};

export const getUser = (id: string) => {
  return getData(`/users/${id}`);
};

export const getComments = (params: { postId: string }) => {
  return getData(`/comments`, params);
};

export const getUserPost = (params: { userId: string }) => {
  return getData(`/posts`, params);
};

export const putPost = (body: Post, id: string) => {
  return patchData(`/posts/${id}`, body);
};

export const deletePost = (id: string) => {
  return deleteData(`posts/${id}`);
};

export const getTodos = () => {
  return getData(`/todos`);
};

export const createPost = (body: PostItems) => {
  return postData(`/posts`, body);
};

export const getAllUsers = (params?: { limit: number; page: number }) => {
  return getData(`/users`, params);
};
