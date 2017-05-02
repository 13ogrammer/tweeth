// ------------------------------------
// Constants
// ------------------------------------
export const CHANGE_TB_TITLE = 'CHANGE_TB_TITLE'

// ------------------------------------
// Actions
// ------------------------------------
export function changeTBTitle (title = '') {
  return {
    type: CHANGE_TB_TITLE,
    payload: {
      title: title
    }
  }
}

export const actions = {
  changeTBTitle
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [CHANGE_TB_TITLE]: (state, action) => {
    return Object.assign({}, state.topBarState, action.payload)
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { title: null }
export default function MyTopBarReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
