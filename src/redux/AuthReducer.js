const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: 123,
    email: 'iephgwog@gmail.com',
    login: 'MyAcc',
    isAuth: true
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true

            }

        default: {
            return { ...state }
        }
    }
}

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } });

export default AuthReducer;