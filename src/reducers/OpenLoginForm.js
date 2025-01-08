// STATE 
export const openLoginForm = false

// REDUCER
export const openLoginFormReducer = (state, action) => {
    switch (action.type) {
        case 'openLoginForm':
            return true
        case 'closeLoginForm':
            return false
        default:
            return false
    }
}
