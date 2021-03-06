import { actionType } from "./actions";
import { productType } from "../../../pages/Cart";
import produce from 'immer' // change state directly

export default function cart(state: [] = [], action: actionType) {
  switch(action.type) {
    case '@cart/ADD_SUCCESS':
      return produce(state, (draft: productType[]) => {
        const { product } = action
        product && draft.push(product)
      })

    case '@cart/REMOVE':
      return produce(state, (draft: productType[]) => {
        const productIndex = draft.findIndex(p => p.id === action.id)
        if (productIndex >= 0) draft.splice(productIndex, 1)
      })

    case '@cart/UPDATE_AMOUNT_SUCCESS':
      return produce(state, (draft: productType[]) => {
        const productIndex = draft.findIndex(p => p.id == action.id)
        if(productIndex >= 0) {
          draft[productIndex].amount = Number(action.amount)
        }
      })
      
    default:
      return state
  }
}