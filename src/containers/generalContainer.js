import React, { Component } from 'react';
import General from '../components/General';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';

class GeneralContainer extends Component {

  componentDidMount(){
    this.props.updateWorld()
  }

  render(){
    return(
      <div><h1 className="title">World</h1>

        <General world={this.props.world}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    world: state.world
  }
  };

  const mapDispatchToProps = dispatch => {
    return {
      updateWorld: (world) => dispatch(actionTypes.loadWorld(world)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (GeneralContainer) ;
