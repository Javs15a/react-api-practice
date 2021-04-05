import { User } from "modules/users/UserValues";
import { createContext } from "react";

export interface IUserProps {
    user: User;
    updateUser: (user: User) => void;
}

const UserContext = createContext<IUserProps>({
    user: {
        first_name: '',
        last_name: '',
        user_name: '',
        email: '',
        phone: ''
    },
    updateUser: (user: User) => { }
});

export const UserContextConsumer = UserContext.Consumer;
export const UserContextProvider = UserContext.Provider;

export default UserContext;