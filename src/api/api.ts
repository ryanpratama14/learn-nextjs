import { API_URL } from "@/lib/utils";
import { getSession, signOut } from "next-auth/react";

export async function getData(
  url: string,
  paramsProps?: object,
  cacheType?: RequestCache
) {
  const session = await getSession();
  let headers: HeadersInit | undefined = undefined;

  if (session) {
    headers = {
      Authorization: `Bearer ${session.user.token}`,
    };
  }

  const params = new URLSearchParams();
  if (paramsProps) {
    for (const key of Object.keys(paramsProps)) {
      const value = (paramsProps as any)[key];
      if (value) {
        params.append(key, value);
      }
    }
  }
  const paramString = params.toString();
  const queryString = paramString ? `?${paramString}` : "";

  const res = await fetch(`${API_URL}${url}${queryString}`, {
    cache: cacheType ? cacheType : undefined,
    headers,
  });

  if (res.status === 401) {
    return signOut();
  }

  return res.json();
}

// POST
export async function postData<T>(url: string, body: T) {
  const session = await getSession();
  const headers: HeadersInit | undefined = {
    "Content-Type": "application/json",
  };

  if (session) {
    headers["Authorization"] = `Bearer ${session.user.token}`;
  }

  const res = await fetch(`${API_URL}${url}`, {
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
export async function postFormData(url: string, body: FormData) {
  const session = await getSession();
  const headers: HeadersInit | undefined = {
    "Content-Type": "multipart/form-data",
  };

  if (session) {
    headers["Authorization"] = `Bearer ${session.user.token}`;
  }

  const res = await fetch(`${API_URL}${url}`, {
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
export async function putData<T>(url: string, body: T) {
  const session = await getSession();
  const headers: HeadersInit | undefined = {
    "Content-Type": "application/json",
  };

  if (session) {
    headers["Authorization"] = `Bearer ${session.user.token}`;
  }

  const res = await fetch(`${API_URL}${url}`, {
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
export async function patchData<T>(url: string, body: T) {
  const session = await getSession();
  const headers: HeadersInit | undefined = {
    "Content-Type": "application/json",
  };

  if (session) {
    headers["Authorization"] = `Bearer ${session.user.token}`;
  }

  const res = await fetch(`${API_URL}${url}`, {
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
export async function deleteData(url: string) {
  const session = await getSession();
  let headers: HeadersInit | undefined = undefined;

  if (session) {
    headers = {
      Authorization: `Bearer ${session.user.token}`,
    };
  }

  const res = await fetch(`${API_URL}${url}`, {
    method: "DELETE",
    headers,
  });

  if (res.status === 401) {
    return signOut();
  }

  return res.json();
}
