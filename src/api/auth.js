import api from './index'


const baseHost = "https://wedev-api.sky.pro/api";

export const login = async ({ login, password }) => {
  const response = await fetch(baseHost + "/user/login", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  });

  if (response.status === 400) {
    throw new Error("Неверный логин или пароль");
  }

  const data = await response.json();
  return data.user; 
};


export const register = async ({ login, name, password }) => {
  const response = await fetch(`${baseHost}/user`, {
    method: "POST",
    body: JSON.stringify({
      login,
      name,
      password,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Ошибка регистрации");
  }

  return data.user;
};