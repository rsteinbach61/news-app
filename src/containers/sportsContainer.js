import React, { Component } from 'react';
import { connect } from 'react-redux';
import  Sports from '../components/Sports';
import * as actionTypes from '../store/actions';
import '../App.css';


class SportsContainer extends Component {

  componentDidMount() {

    this.props.updateSports()
  }
  render(){
    //conditional to hide Sports component when displaying text of story.
    if(this.props.show){
      return(
        <div >
          <h1 className="title">Sports</h1>

          <Sports sports={this.props.sports} />
        </div>
      )
    } else {
      return null; //null means Sports component won't display
    }
  }
}

const mapStateToProps = state => {
  return {
    sports: state.sports,
    show: state.show //show gets updated to false by reducer when a story link is clicked
    }
  };

  const mapDispatchToProps = dispatch => {
    return {
      //updateSports: () => dispatch({type: actionTypes.UPDATE_SPORTS, value: actionTypes.loadSports() }),
      updateSports: (sports) => dispatch(actionTypes.loadSports(sports)),
  }
}
//export default SportsContainer;

export default connect(mapStateToProps, mapDispatchToProps) (SportsContainer);

//<button onClick={this.props.updateSports}>Update Sports</button>
