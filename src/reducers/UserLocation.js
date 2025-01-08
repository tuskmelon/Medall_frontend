// STATE 
export const userLocation = '';

// REDUCER
export const userLocationReducer = (state, action) => {
    switch (action.type) {
        case 'chennai':
            return 'chennai'
        case 'banglore':
            return 'banglore'
        case 'andhraPradesh':
            return 'andhraPradesh'
        default:
            return state
    }
}
