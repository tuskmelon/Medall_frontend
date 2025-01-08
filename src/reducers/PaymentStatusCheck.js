// STATE 
export const paymentStatus = false;

// REDUCER
export const paymentStatusReducer = (state, action) => {
    switch (action.type) {
        case 'showThankYouPage':
            return true
        case 'closeThankYouPage':
            return false
        default:
            return state
    }
}
