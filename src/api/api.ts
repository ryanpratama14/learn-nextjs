import { API_URL } from "@/lib/utils";
import { getSession, signOut } from "next-auth/react";

export async function getToken() {
  const session = await getSession();
  if (session) return session.user.token;
  return null;
}

export async function getData(
  url: string,
  paramsProps?: object,
  cacheType?: RequestCache
) {
  const token = await getToken();
  let headers: HeadersInit | undefined = undefined;

  if (token) {
    headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  const params = new URLSearchParams();
  if (paramsProps) {
    for (const key of Object.keys(paramsProps)) {
      const value = (paramsProps as any)[key];
      if (value) {
        params.append(key, value.toString());
      }
    }
  }
  const paramsQuery = params.size !== 0 ? `?${params}` : "";
  const res = await fetch(`${API_URL}${url}${paramsQuery}`, {
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
  const token = await getToken();
  const headers: HeadersInit | undefined = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
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
  const token = await getToken();
  const headers: HeadersInit | undefined = {
    "Content-Type": "multipart/form-data",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
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
  const token = await getToken();
  const headers: HeadersInit | undefined = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
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
  const token = await getToken();
  const headers: HeadersInit | undefined = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
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
  const token = await getToken();
  let headers: HeadersInit | undefined = undefined;

  if (token) {
    headers = {
      Authorization: `Bearer ${token}`,
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
