const getLocalStorage = () => {
    const users: string | null = localStorage.getItem("Users");
    const data = users ? JSON.parse(users) : {};
    return data;
}

export default getLocalStorage;
