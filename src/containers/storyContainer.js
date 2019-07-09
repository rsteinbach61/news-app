import React, { Component } from 'react';
import { connect } from 'react-redux';
import Story from '../components/Story';
import * as actionTypes from '../store/actions';
import StoryHeader from '../components/storyHeader';
class StoryContainer extends Component {

componentDidMount() {
  this.props.loadStory(this.props.location.state);
}

render() {

  const {story} = this.props
  return(
    <div>
    <StoryHeader />  
    <Story story={story}/>
    </div>
  )
}
}
const mapStateToProps = state => {
  return {story: state.story}
}

const mapDispatchToProps = dispatch => {
  return {
    loadStory: (story) => dispatch(actionTypes.loadStory(story)),

}
}
export default connect(mapStateToProps, mapDispatchToProps) (StoryContainer);
