const UserReducer = (state, action) => {
    switch(action.type) {
        case 'login': 
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case 'logout':
            return {
                ...state,
                user: null,
                loading: false
            }
        case 'loading':
            return {
                ...state,
                loading: true
            }
        default: 
        return state;
    }
}


export default UserReducer