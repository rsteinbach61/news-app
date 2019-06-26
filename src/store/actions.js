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


async function getSports(url){
 const fetchResult = fetch(url);
 const response = await fetchResult;
 const jsonData = await response.json();
 return jsonData;
}
