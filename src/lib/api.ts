import { API_URL, getToken } from "@/utils/utils";
const token = getToken();

export async function getData(
  url: string,
  paramsProps?: object,
  cacheType?: RequestCache
) {
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
    return console.log("UNAUTHORIZED");
  }

  return res.json();
}

// POST
export async function postData<T>(url: string, body: T) {
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
    return console.log("UNAUTHORIZED");
  }

  return res.json();
}

// POST FORMDATA
export async function postFormData(url: string, body: FormData) {
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
    return console.log("UNAUTHORIZED");
  }

  return res.json();
}

// PATCH
export async function patchData<T>(url: string, body: T) {
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
    return console.log("UNAUTHORIZED");
  }

  return res.json();
}

// DELETE
export async function deleteData(url: string) {
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
    return console.log("UNAUTHORIZED");
  }

  return res.json();
}
