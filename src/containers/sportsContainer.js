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

    return(
      <div >
        <h1 className="title">Sports</h1>

        <Sports sports={this.props.sports} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    sports: state.sports
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
