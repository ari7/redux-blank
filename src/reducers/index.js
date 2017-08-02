
export default (state, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        messages: [
          ...state.messages,
          action.message
        ]
      }
      break;
    default:
      return { messages: [] }
  }
}
