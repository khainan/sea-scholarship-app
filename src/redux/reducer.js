const globalState = {
    websiteContent: [],
    listUniversity: [],
    listTestimoni: []
  }
  
const rootReducer = (state = globalState, action) => {
  if(action.type == 'ADD_LIST_UNIVERSITY'){
    state.listUniversity = action.data
    return {
      ...state,
      listUniversity: action.data
    }
  }
  else if(action.type == 'ADD_LIST_WEB_CONTENT'){
    return {
      ...state,
      websiteContent: action.data
    }
  }
  else if(action.type == 'ADD_LIST_TESTIMONI'){
    return {
      ...state,
      listTestimoni: action.data
    }
  }
  return state
}

export default rootReducer