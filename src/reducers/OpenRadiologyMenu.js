// STATE 
export const openRadiologyMenu = {
    isXRayOpen: false,
    isUsgOpen: false,
    isCtOpen: false,
    isMriOpen: false,
    isEcgOpen: false,
    isEchoOpen: false,
    isTmtOpen: false,
    isManmmogramOpen: false,

}

// REDUCER
export const openRadiologyMenuReducer = (state, action) => {
    switch (action.type) {
        case 'openRadiologyXrayMenu':
            return {
                ...openRadiologyMenu, isXRayOpen: true, isUsgOpen: false,
                isCtOpen: false,
                isMriOpen: false,
                isEcgOpen: false,
                isEchoOpen: false,
                isTmtOpen: false,
                isManmmogramOpen: false,
            }
        case 'openRadiologyUsgMenu':
            return {
                ...openRadiologyMenu, isUsgOpen: true, isXRayOpen: false, isCtOpen: false,
                isMriOpen: false,
                isEcgOpen: false,
                isEchoOpen: false,
                isTmtOpen: false,
                isManmmogramOpen: false,
            }
        case 'openRadiologyCtMenu':
            return {
                ...openRadiologyMenu, isCtOpen: true, isXRayOpen: false,
                isUsgOpen: false,
                isMriOpen: false,
                isEcgOpen: false,
                isEchoOpen: false,
                isTmtOpen: false,
                isManmmogramOpen: false,
            }
        case 'openRadiologyMriMenu':
            return {
                ...openRadiologyMenu, isMriOpen: true, isXRayOpen: false,
                isUsgOpen: false,
                isCtOpen: false,
                isEcgOpen: false,
                isEchoOpen: false,
                isTmtOpen: false,
                isManmmogramOpen: false,
            }
        case 'openRadiologyEcgMenu':
            return {
                ...openRadiologyMenu, isEcgOpen: true, isXRayOpen: false,
                isUsgOpen: false,
                isCtOpen: false,
                isMriOpen: false,
                isEchoOpen: false,
                isTmtOpen: false,
                isManmmogramOpen: false,
            }
        case 'openRadiologyTmtMenu':
            return {
                ...openRadiologyMenu, isTmtOpen: true, isXRayOpen: false,
                isUsgOpen: false,
                isCtOpen: false,
                isMriOpen: false,
                isEcgOpen: false,
                isEchoOpen: false,
                isManmmogramOpen: false,
            }
        case 'openRadiologyManmmogramMenu':
            return {
                ...openRadiologyMenu, isManmmogramOpen: true, isXRayOpen: false,
                isUsgOpen: false,
                isCtOpen: false,
                isMriOpen: false,
                isEcgOpen: false,
                isEchoOpen: false,
                isTmtOpen: false,
            }
        case 'resetRadiologyMenu':
            return {
                isXRayOpen: false,
                isUsgOpen: false,
                isCtOpen: false,
                isMriOpen: false,
                isEcgOpen: false,
                isEchoOpen: false,
                isTmtOpen: false,
                isManmmogramOpen: false,
            }
        default:
            return state
    }
}
