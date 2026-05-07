const baseHost = "https://wedev-api.sky.pro/api/kanban";
export async function getTasks( {token} ) {
    const response = await fetch(baseHost, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        throw new Error("Ошибка при получении задач")
    }
}