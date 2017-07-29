let validatePayload = (payload) => {
  if (!payload.id || !payload.title || !payload.url)
    throw new Error('Validation Error: Picture/payload must have an id, title, and url')
}

let initialState = []

export default(state=initialState, action) => {
  let {type, payload} = action
  switch (type) {
  case 'CREATE_PICTURE':
    validatePayload(payload)
    return [...state, payload]
  case 'PICTURE_RESET':
    return initialState
  default:
    return state
  }
}
