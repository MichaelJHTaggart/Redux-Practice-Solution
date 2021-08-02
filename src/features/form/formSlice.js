//State
const initialState = {
  nameText: ''
}

//Action Creator = a function that holds an action
export const nameAdded = nameText => {
  //The object below is called an action)
  return {
    type: 'form/nameAdded',
    payload: nameText
  }
}

//Reducer
export default function formSlice(state = initialState, action) {
  switch (action.type) {
    case 'form/nameAdded': {
      return {
        nameText: action.payload
      }
    }
    default:
      return state
  }
}