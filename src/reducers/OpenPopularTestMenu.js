// STATE 
export const openPopularTestMenu = false

// REDUCER
export const openPopularTestMenuReducer = (state, action) => {
    switch (action.type) {
        case 'openPopularTestMenu':
            return true
        case 'closePopularTestMenu':
            return false
        default:
            return false
    }
}
