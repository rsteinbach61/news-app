import React, { Component } from 'react';
import { connect } from 'react-redux';
import Story from '../components/Story';
import * as actionTypes from '../store/actions';

class StoryContainer extends Component {

componentDidMount() {
  this.props.loadStory(this.props.location.state);
}

render() {
  
  const {story} = this.props
  return(
    <div>

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
