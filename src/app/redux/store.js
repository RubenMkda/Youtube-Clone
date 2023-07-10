import { createStore } from 'redux'

const SET_USER = 'SET_USER'

export const setUser = (user) => ({
    type: SET_USER,
    payload: user
})

const initialState = {}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return action.payload
        default:
            return state
    }
}

const store = createStore(userReducer)

export default store