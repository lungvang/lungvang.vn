export const isBrowser = () => typeof window !== "undefined";

export const getUser = () =>
  isBrowser() && window.localStorage.getItem("lvUser")
    ? JSON.parse(window.localStorage.getItem("lvUser"))
    : {};

const setUser = (user) =>
  window.localStorage.setItem("lvUser", JSON.stringify(user));

export const handleLogin = ({ username, password }) => {
  if (username === `jason` && password === `pass`) {
    return setUser({
      username: `jason`,
      name: `Jason Q`,
      email: `jason@lungvang.com`,
    });
  }

  return false;
};

export const isLoggedIn = () => {
  const user = getUser();

  return !!user.username;
};

export const logout = (callback) => {
  setUser({});
  callback();
};
