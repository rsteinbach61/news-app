import React, { Component } from 'react';
import { connect } from 'react-redux';
import Politics from '../components/Politics';
import * as actionTypes from '../store/actions';

class PoliticsContainer extends Component {

  componentDidMount() {

    this.props.updatePolitics()
  }
  render(){
    if(this.props.show){
      return(
        <div><h1 className="title">Politics</h1>

          <Politics politics={this.props.politics}/>
        </div>
      )
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  return {
    politics: state.politics,
    show: state.show //show gets updated to false by reducer when a story link is clicked
  }
  };

  const mapDispatchToProps = dispatch => {
    return {
      updatePolitics: (politics) => dispatch(actionTypes.loadPolitics(politics)),

  }
}
export default connect(mapStateToProps, mapDispatchToProps) (PoliticsContainer);
