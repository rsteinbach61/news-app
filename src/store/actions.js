export const UPDATE_SPORTS = "UPDATE_SPORTS"
export function loadSportsSuccess(sports){
  return {type: UPDATE_SPORTS, sports}
}
export const UPDATE_POLITICS = "UPDATE_POLITICS"
export function loadPoliticsSuccess(politics){
  return {type: UPDATE_POLITICS, politics}
}

export const UPDATE_WORLD = "UPDATE_WORLD"
export function loadWorldSuccess(world){
  return {type: UPDATE_WORLD, world}
}

export const UPDATE_STORY = "UPDATE_STORY"
export function loadStorySuccess(story){
  return {type: UPDATE_STORY, story}
}

export function loadSports(){
  return function(dispatch) {
    const url = `https://content.guardianapis.com/sport?api-key=`  + process.env.REACT_APP_API_KEY
    return getSports(url).then(sports => {
      dispatch(loadSportsSuccess(sports))
    })
  }
}

export function loadPolitics(){
  return function(dispatch) {
    const url = `https://content.guardianapis.com/politics?api-key=` + process.env.REACT_APP_API_KEY
    return getSports(url).then(politics => {
      dispatch(loadPoliticsSuccess(politics))
    })
  }
}

export function loadWorld(){
  return function(dispatch) {
    const url = `https://content.guardianapis.com/world?api-key=` + process.env.REACT_APP_API_KEY
    return getSports(url).then(world => {
      dispatch(loadWorldSuccess(world))
    })
  }
}

export function loadStory(apiUrl){

  return function(dispatch) {
    const url = apiUrl + "?show-fields=all&api-key=" + process.env.REACT_APP_API_KEY
    return getSports(url).then(story => {
      dispatch(loadStorySuccess(story))
    })
  }
}

//apiUrl + "?&show-fields=bodyText&api-key=" + process.env.REACT_APP_API_KEY


async function getSports(url){
 const fetchResult = fetch(url);
 const response = await fetchResult;
 const jsonData = await response.json();
 return jsonData;
}
