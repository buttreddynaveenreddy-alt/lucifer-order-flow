export interface User {
  username: string;
  email: string;
}

export const login = (username: string, password: string): User | null => {
  // Simple demo login - accepts any username with password "demo123"
  if (password === "demo123") {
    const user = { username, email: `${username}@lucifercat.com` };
    localStorage.setItem("luciferUser", JSON.stringify(user));
    return user;
  }
  return null;
};

export const logout = () => {
  localStorage.removeItem("luciferUser");
};

export const getUser = (): User | null => {
  const userData = localStorage.getItem("luciferUser");
  return userData ? JSON.parse(userData) : null;
};
