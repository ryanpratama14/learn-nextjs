export async function getAllUsers() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  if (!res?.ok) throw new Error("failed to fetch data");
  return res?.json();
}

export async function getUser(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  if (!res?.ok) throw new Error("Failed to fetch user data");
  return res?.json();
}

export async function getUserPost(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  if (!res?.ok) throw new Error("Failed to fetch user's post");
  return res?.json();
}
