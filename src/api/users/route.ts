import { deleteData, getData, patchData, postData } from "@/api/api";

export async function getTokyoTime() {
  const res = await fetch(`https://worldtimeapi.org/api/timezone/Asia/Tokyo`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch time data");
  return res.json();
}

export function getUser(id: string) {
  return getData(`/users/${id}`);
}

export function getComments(params: { postId: string }) {
  return getData(`/comments`, params);
}

export function getUserPost(params: { userId: string }) {
  return getData(`/posts`, params);
}

export function putPost(body: Post, id: string) {
  return patchData(`/posts/${id}`, body);
}

export function deletePost(id: string) {
  return deleteData(`posts/${id}`);
}

export function getTodos() {
  return getData(`/todos`);
}

export function createPost(body: PostItems) {
  return postData(`/posts`, body);
}

export async function getAllUsers(params?: { limit: number; page: number }) {
  return await getData(`/users`, params);
}
