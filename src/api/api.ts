import { BASE_URL } from "@/lib/utils";
import { getSession, signOut } from "next-auth/react";

export async function getToken() {
  const session = await getSession();
  if (session) return session.user.token;
  return null;
}

export async function getData(
  slug: string,
  params?: object,
  cacheType?: RequestCache
) {
  const token = await getToken();
  let headers: HeadersInit | undefined = undefined;

  if (token) {
    headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  const completedUrl = new URL(`${BASE_URL}${slug}`);

  if (params) {
    for (const key of Object.keys(params)) {
      const value = (params as any)[key];
      if (value) {
        completedUrl.searchParams.set(key, value);
      }
    }
  }

  const res = await fetch(completedUrl.toString(), {
    cache: cacheType ? cacheType : undefined,
    headers,
  });

  if (res.status === 401) {
    return signOut();
  }

  return res.json();
}

// POST
export async function postData<T>(slug: string, body: T) {
  const token = await getToken();
  const headers: HeadersInit | undefined = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(`${BASE_URL}${slug}`, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });

  if (res.status === 401) {
    return signOut();
  }

  return res.json();
}

// POST FORMDATA
export async function postFormData(slug: string, body: FormData) {
  const token = await getToken();
  const headers: HeadersInit | undefined = {
    "Content-Type": "multipart/form-data",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(`${BASE_URL}${slug}`, {
    method: "POST",
    headers,
    body: body,
  });

  if (res.status === 401) {
    return console.log("UNAUTHORIZED");
  }

  return res.json();
}

// PUT
export async function putData<T>(slug: string, body: T) {
  const token = await getToken();
  const headers: HeadersInit | undefined = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(`${BASE_URL}${slug}`, {
    method: "PUT",
    headers,
    body: JSON.stringify(body),
  });

  if (res.status === 401) {
    return signOut();
  }

  return res.json();
}

// PATCH
export async function patchData<T>(slug: string, body: T) {
  const token = await getToken();
  const headers: HeadersInit | undefined = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const res = await fetch(`${BASE_URL}${slug}`, {
    method: "PATCH",
    headers,
    body: JSON.stringify(body),
  });

  if (res.status === 401) {
    return signOut();
  }

  return res.json();
}

// DELETE
export async function deleteData(slug: string) {
  const token = await getToken();
  let headers: HeadersInit | undefined = undefined;

  if (token) {
    headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  const res = await fetch(`${BASE_URL}${slug}`, {
    method: "DELETE",
    headers,
  });

  if (res.status === 401) {
    return signOut();
  }

  return res.json();
}
