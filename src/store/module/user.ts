import { Reducer } from 'redux'
import { IAction } from '../type'

export interface UserState {
  username: string
  token: string
}

const defaultUser: UserState = {
  username: '',
  token: '',
}

const userReducer: Reducer<UserState, IAction<any>> = (state = defaultUser, action: IAction<any>) => {
  const { type, payload } = action
  return {
    ...state,
  }
}

export default userReducer
