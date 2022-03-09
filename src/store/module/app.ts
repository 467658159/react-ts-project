import { Reducer } from 'redux'
import { IAction } from '../type'

export interface AppState {
  sidebar: {
    opened: boolean
  }
  init: boolean
}

const defaultApp: AppState = {
  sidebar: {
    opened: true,
  },
  init: false,
}

const appReducer: Reducer<AppState, IAction<any>> = (state = defaultApp, action: IAction<any>) => {
  const { type, payload } = action
  return { ...state }
}

export default appReducer
