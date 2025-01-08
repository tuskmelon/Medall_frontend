// STATE
const userInformation = JSON.parse(window.localStorage.getItem('medallUserInfo'));

// Fecthing old user family members 
const oldUserFamilyMembers = JSON.parse(window.localStorage.getItem("OldUserDetails"));
let familyMembers = [];
if (oldUserFamilyMembers) {
    familyMembers = oldUserFamilyMembers.slice(1).map((member) => { return { name: member.CustomerName, relation: "Unknown", mobileNumber: member.MobileNumber, medallId: member.CustomerID, } })
}

// console.log(oldUserFamilyMembers)
// console.log(...familyMembers)

export const user = {
    isUserLoggedIn: false,
    salutation: userInformation ? userInformation.namePrefix : "",
    name: userInformation ? userInformation.name : "",
    mobile: userInformation ? userInformation.mobileNumber : "",
    email: userInformation ? userInformation.email : "",
    userMedallId: userInformation ? userInformation.medallId : "",
    cartId: userInformation ? userInformation.cart : "",
    addressId: '',
    location: userInformation ? userInformation.location : "",
    pincode: userInformation ? userInformation.pincode : "",
    userId: userInformation ? userInformation._id : "",
    cartMembers: [
        {
            name: userInformation ? userInformation.name : "",
            relation: 'My Self',
            mobileNumber: userInformation ? userInformation.mobileNumber : "",
            medallId: userInformation ? userInformation.medallId : "",
        },
        ...familyMembers
    ],
    relationsDetails: [
        {
            relativeName: 'Father',
            medallId: 125565
        },
    ]
};

// REDUCER
export const userReducer = (state, action) => {
    switch (action.type) {
        case 'login':
            return { ...state, isUserLoggedIn: true, name: action.payload.name, mobile: action.payload.mobile, userMedallId: action.payload.medallId, location: action.payload.location, pincode: action.payload.pincode, userId: action.payload.userId, cartId: action.payload.cartId, addressId: action.payload.addressId, cartMembers: [action.payload.cartMembers] }

        case 'logout':
            return { ...state, isUserLoggedIn: false }

        case 'removeCartMember':
            const newArrayOfCartMemberWithOnlyId = state.cartMembers.map(member => member.medallId);
            const indexOfMemberToRemove = newArrayOfCartMemberWithOnlyId.indexOf(action.payload.memberIdValue);

            if (indexOfMemberToRemove >= 0) {
                console.log(state.cartMembers);
                return { ...state, cartMembers: state.cartMembers.splice(indexOfMemberToRemove, 1) }
            } else {
                console.log(state.cartMembers);
                return state
            }

        case 'updateCartMember':
            return { ...state, cartMembers: action.payload.addAccountHolderDetails }

        case 'addNewMemberAtCheckout':
            return { ...state, cartMembers: [...(state.cartMembers), action.payload.newMember] }

        default:
            return state
    }
}