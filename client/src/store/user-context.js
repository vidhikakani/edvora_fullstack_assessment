import { createContext, useState } from 'react';

const UserContext = createContext({
    user: {},
    addUser: (user) => { },
    removeUser: () => { },
});

export function UserContextProvider(props) {
    const [user, setUser] = useState(null);

    function addUserHandler(user) {
        setUser(user)
    }

    function removeUserHandler() {
        setUser(null);
    }

    const context = {
        user,
        addUser: addUserHandler,
        removeUser: removeUserHandler,
    };

    return (
        <UserContext.Provider value={context}>
            {props.children}
        </UserContext.Provider>
    );
}

export default UserContext;
