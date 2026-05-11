import api from './index'
//export const login = async ({ login, password }) => {
//    try {
//        const respose = await api.post('/user/login', {
//            login,
//            password,
//        });
//        return respose.data.user;
//    } catch (err) {
//        const message = err.response?.data?.error || 'Ошибка при входе';
//        throw new Error(message)
//    }
//};

// src/api/auth.js

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
    try{
    const response = await api.post('/user', {
    login,
    name,
    password,
});
return response.data.user;
} catch (err) {
    const message = err.response?.data?.error || 'Ошибка при регистрации';
    throw new Error(message);
}
};