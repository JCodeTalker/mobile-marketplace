import { all, call, put, select, takeLatest } from 'redux-saga/effects'
import api from "../../../services/api";
import formatValue from '../../../utils/formatValue';
import { addToCartSuccess, updateAmountSuccess } from './actions';


function* addToCart({ id }) {
  const productExists = yield select(state => {
    console.log("current state: ")
    console.log(state.cart)
    return state && state.cart.find(product => parseInt(product.id) === id)
  }
  )
  const currentAmount = productExists ? productExists.amount : 0
  const amount = currentAmount + 1

  if (productExists) {
    console.log("Product already exists. Increasing amount.")
    yield put(updateAmountSuccess(id, amount))
  }
  else {
    console.log("Product doesn't exist. Adding new one.")
    console.log(productExists)
    const response = yield call(api.get, `products/${id}`)
    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatValue(response.data.price)
    }
    yield put(addToCartSuccess(data))
  }
}


function* updateAmount({ id, amount }) {
  if (amount <= 0) return
  yield put(updateAmountSuccess(id, amount))
}


export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount)
])