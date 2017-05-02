// ------------------------------------
// Constants
// ------------------------------------
export const OPEN_DRAWER = 'OPEN_DRAWER'
export const TOGGLE_DRAWER = 'TOGGLE_DRAWER'

// ------------------------------------
// Actions
// ------------------------------------
export function openDrawer (open = true) {
  return {
    type: OPEN_DRAWER,
    payload: open
  }
}

export function toggleDrawer () {
  return {
    type: TOGGLE_DRAWER,
    payload: {}
  }
}

export const actions = {
  openDrawer,
  toggleDrawer
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [OPEN_DRAWER]: (state, action) => action.payload,
  [TOGGLE_DRAWER]: (state, action) => !state
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = false
export default function MyDrawerReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
