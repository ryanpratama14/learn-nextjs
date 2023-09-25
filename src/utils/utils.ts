export const LoadToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const API_URL = process.env.NEXT_PUBLIC_API;

export const getToken = () => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");
    if (token) return token;
    return;
  }
};
