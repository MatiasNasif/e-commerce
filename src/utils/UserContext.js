import { useState, createContext } from "react";

const userDefault = {
    name: null,
    email: null,
    password: null,
}

export const UserContext = createContext(userDefault);

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        name: null,
        email: null,
        password: null,
    });

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;