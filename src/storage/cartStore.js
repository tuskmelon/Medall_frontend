import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

const initialValue = {
  testCart: []
}

export const testCart = create(
  persist(() => initialValue, {
    name: 'testCart',
    storage: createJSONStorage(() => localStorage),
    partialize: state => ({ testCart: state.testCart })
  })
)

export const addTest = item => {
  console.log(item)
  const itemIndex = testCart
    .getState()
    .testCart.findIndex(testCart => testCart.id === item.id)

  if (itemIndex === -1) {
    console.log(item, 'New Item')
  } else {
    console.log(item, 'Existing Item')
  }
}

export const removeTest = item => {
  console.log(item.id, 'ITEM')
  testCart.setState(state => {
    const updatedTable = state.testCart.filter(
      testCart => testCart.id !== item.id
    )
    return { testCart: updatedTable }
  })
}
