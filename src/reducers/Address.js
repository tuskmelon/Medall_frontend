// STATE 
export const address = {
    permanentAddress: {
        houseOrFlatNum: '',
        area: '',
        landmark: '',
        pincode: '',
        contactPerson: '',
        secondaryContactPerson: ''
    },
    officeAddress: {
        houseOrFlatNum: '',
        area: '',
        landmark: '',
        pincode: '',
        contactPerson: '',
        secondaryContactPerson: ''
    },
    otherAddress: {
        houseOrFlatNum: '',
        area: '',
        landmark: '',
        pincode: '',
        contactPerson: '',
        secondaryContactPerson: ''
    },
}

// REDUCER
export const addressReducer = (state, action) => {
    switch (action.type) {
        case 'submitAddress':
            return action.payload
        default:
            return state
    }
}