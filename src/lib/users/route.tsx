export const api = process.env.NEXT_PUBLIC_API;

export async function getAllUsers() {
  const res = await fetch(`${api}/users`);
  if (!res?.ok) throw new Error("failed to fetch data");
  return res?.json();
}

export async function getTokyoTime() {
  const res = await fetch(`https://worldtimeapi.org/api/timezone/Asia/Tokyo`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch time data");
  return res.json();
}

export async function getUser(userId: string) {
  const res = await fetch(`${api}/users/${userId}`, {
    next: {
      revalidate: 5,
    },
  });
  if (!res?.ok) undefined;
  return res?.json();
}

export async function getComments(postId: string) {
  const res = await fetch(`${api}/comments?postId=${postId}`);
  if (!res?.ok) undefined;
  return res?.json();
}

export async function getUserPost(userId: string) {
  const res = await fetch(`${api}/posts?userId=${userId}`, {
    next: { revalidate: 10 },
  });
  if (!res?.ok) throw new Error("Failed to fetch user's post");
  return res?.json();
}

export async function createPost(postData: object) {
  const res = await fetch(`${api}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });
  if (!res?.ok) throw new Error("Failed to create post");
  return res?.json();
}

export async function putPost(postData: object, postId: string) {
  const res = await fetch(`${api}/posts/${postId}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });
  if (!res?.ok) throw new Error("Failed to edit post");
  return res?.json();
}

export async function deletePost(postId: string) {
  const res = await fetch(`${api}/posts/${postId}`, {
    method: "DELETE",
  });
  if (!res?.ok) throw new Error("Failed to delete post");
  return res?.json();
}

export async function getTodos() {
  const res = await fetch(`${api}/todos`);
  if (!res?.ok) throw new Error("Failed to delete post");
  return res?.json();
}
