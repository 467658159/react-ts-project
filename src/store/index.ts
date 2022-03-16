import { createStore, Reducer, combineReducers, Middleware, compose, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import { IAction, IStoreState } from './type'
import appReducer from './module/app'
import userReducer from './module/user'

const reducers: Reducer<IStoreState, IAction<any>> = combineReducers<IStoreState>({
  user: userReducer,
  app: appReducer,
})

const middleware: Middleware[] = [reduxThunk]

function createMyStore() {
  return createStore(reducers, applyMiddleware(...middleware))
}

const store = createMyStore()

export default store
