// STATE 
export const openHealthPackageMenu = false

// REDUCER
export const openHealthPackageMenuReducer = (state, action) => {
    switch (action.type) {
        case 'openHealthPackageMenu':
            return true
        case 'closeHealthPackageMenu':
            return false
        default:
            return false
    }
}
