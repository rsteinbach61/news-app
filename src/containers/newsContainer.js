import React, { Component } from 'react';
import SportsContainer from './sportsContainer';
import GeneralContainer from './generalContainer';
import PoliticsContainer from './politicsContainer';
import * as actionTypes from '../store/actions';
import { connect } from 'react-redux';

class NewsContainer extends Component {
  componentDidMount(){
    this.props.updateWorld()
    this.props.updatePolitics()
    this.props.updateSports()
  }
render(){
return (
  <div>
  < GeneralContainer/>
  < SportsContainer/>
  < PoliticsContainer/>
  </div>
)

}
}
const mapDispatchToProps = dispatch => {
  return {
    updateSports: (sports) => dispatch(actionTypes.loadSports(sports)),
    updatePolitics: (politics) => dispatch(actionTypes.loadPolitics(politics)),
    updateWorld: (world) => dispatch(actionTypes.loadWorld(world)),
}
}
export default connect(null, mapDispatchToProps) (NewsContainer)
