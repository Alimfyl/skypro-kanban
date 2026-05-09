import api from './index'
export const login = async ({ login, password }) => {
    try {
        const respose = await api.post('/user/login', {
            login,
            password,
        });
        return respose.data.user;
    } catch (err) {
        const message = err.response?.data?.error || 'Ошибка при входе';
        throw new Error(message)
    }
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