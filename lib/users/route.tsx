export const api = process.env.API;

export async function getAllUsers() {
  const res = await fetch(`${api}/users`);
  if (!res?.ok) throw new Error("failed to fetch data");
  return res?.json();
}

export async function getUser(userId: string) {
  const res = await fetch(`${api}/users/${userId}`);
  if (!res?.ok) undefined;
  return res?.json();
}

export async function getUserPost(userId: string) {
  const res = await fetch(`${api}/posts?userId=${userId}`, {
    next: { revalidate: 60 },
  });
  if (!res?.ok) throw new Error("Failed to fetch user's post");
  return res?.json();
}
