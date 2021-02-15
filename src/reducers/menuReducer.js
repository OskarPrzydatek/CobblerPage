export default function menuReducer(state, action) {
  switch(action.type) {
    case 'SERVICES_ENTER':
      return {
        ...state,
        service: 'enter'
      }
    case 'SERVICES_LEAVE':
      return {
        ...state,
        service: 'leave'
      }
    case 'CONTACT_ENTER':
      return {
        ...state,
        contact: 'enter'
      }
    case 'CONTACT_LEAVE':
      return {
        ...state,
        contact: 'leave'
      }
    default:
      throw new Error()
  }
}
