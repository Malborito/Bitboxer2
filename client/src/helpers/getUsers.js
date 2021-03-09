export const getUsers = async() => {

    const url = 'http://localhost:8080/shop/users';
    const resp = await fetch( url );
    const data = await resp.json();

    const users = data.map(user => {
        return {
            id : user.id_user,
            username : user.username,
            admin : user.admin,
            enabled : user.enabled
        }
    })

    return (users);
}