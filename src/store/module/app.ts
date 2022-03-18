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

const SET_SIDE_BAR_OPENED = 'SET_SIDE_BAR_OPENED'

export const updateSideBar = (sidebar: AppState['sidebar']) => ({
  type: SET_SIDE_BAR_OPENED,
  payload: sidebar
})

const appReducer: Reducer<AppState, IAction<any>> = (state = defaultApp, action: IAction<any>) => {
  const { type, payload } = action
  return { ...state }
}

export default appReducer
