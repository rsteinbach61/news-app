import * as actionTypes from './actions';

const initialState = {
  //sports: {results: {}},
  sports: null,
  politics: null,
  world: null,
  story: null,
  show: true
}
const reducer = (state = initialState, action) => {

  switch (action.type) {

  case actionTypes.UPDATE_SPORTS:
    return {
      ...state, sports: action.sports.response.results, show: true
    }

  case actionTypes.UPDATE_POLITICS:
    return {
      ...state, politics: action.politics.response.results, show: true
    }

  case actionTypes.UPDATE_WORLD:
    return {
      ...state, world: action.world.response.results, show: true
    }

  case actionTypes.UPDATE_STORY:
      return {
        ...state, story: action.story.response, show: false
      }

  default: return initialState;
  }
}

export default reducer;
