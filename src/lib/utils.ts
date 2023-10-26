export const LoadToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const generateSearchParams = (url: string, params?: object) => {
  const completedUrl = new URL(url);

  if (params) {
    for (const key of Object.keys(params)) {
      const value = (params as any)[key];
      if (value) {
        completedUrl.searchParams.set(key, value);
      }
    }
  }

  return completedUrl.toString();
};

export const BASE_URL = process.env.NEXT_PUBLIC_API;
