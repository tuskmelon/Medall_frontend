// STATE
export const cart = {
  tests: [],
  healthPackages: [],
  appointmentDetails: {
    place: '',
    date: new Date().toJSON().slice(0, 10),
    time: ''
  },
  totalPayableAmount: null
}

// REDUCER
export const cartReducer = (state, action) => {
  console.log(action, 'action')
  switch (action.type) {
    case 'addTestToCart':
      return {
        ...state,
        tests: [
          ...state.tests,
          {
            testName: action.payload.testName,
            testPrice: action.payload.testPrice,
            corpId: action.payload.testCorpId
          }
        ]
      }
    case 'removeLabTests':
      return { ...state, tests: [] }
    // case 'removeCart':
    //   return { ...state, tests: [] }
    case 'removeHealthPackages':
      return { ...state, healthPackages: [] }
    case 'addHealthPackage':
      return {
        ...state,
        healthPackages: [
          ...state.healthPackages,
          {
            healthPackageName: action.payload.packageName,
            healthPackagePrice: +action.payload.packagePrice,
            corpId: action.payload.packageCorpId
          }
        ]
      }
    case 'setTotalPayableAmount':
      return { ...state, totalPayableAmount: action.payload.totalAmountToPay }
    case 'updateAppointmentDetails':
      return {
        ...state,
        appointmentDetails: {
          ...state.appointmentDetails,
          place: action.payload.place,
          date: action.payload.date,
          time: action.payload.time
        }
      }
    case 'removeSingleTest':
      const newArrayOfTestNames = state.tests.map(test => test.testName)
      const indexOfTestToRemove = newArrayOfTestNames.indexOf(
        action.payload.testName
      )

      if (indexOfTestToRemove >= 0) {
        return { ...state, tests: state.tests.splice(indexOfTestToRemove, 1) }
      } else {
        return state
      }
    case 'removeSingleHealthPackage':
      const newArrayOfHealthPackageNames = state.healthPackages.map(
        healthPackage => healthPackage.healthPackageName
      )
      const indexOfHealthPackageToRemove = newArrayOfHealthPackageNames.indexOf(
        action.payload.packageName
      )

      if (indexOfHealthPackageToRemove >= 0) {
        return {
          ...state,
          healthPackages: state.healthPackages.splice(
            indexOfHealthPackageToRemove,
            1
          )
        }
      } else {
        return state
      }
    default:
      return cart
  }
}
