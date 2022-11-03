import {createContext, useReducer, useContext }  from 'react';
import UserReducer from './UserReducer';

const UserContext = createContext();


export const UserProvider = ({children}) => {

    const initialState = {
        user: null,
        loading: false,
    }
    

    const [state, dispatch] = useReducer(UserReducer, initialState);
 
    return <UserContext.Provider value={{
       ...state,
       dispatch
    }}>
        {children}
    </UserContext.Provider>
}

export default UserContext;

export const useUserContext = () => useContext(UserContext);