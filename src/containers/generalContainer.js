import React, { Component } from 'react';
import General from '../components/General';
import { connect } from 'react-redux';
import * as actionTypes from '../store/actions';

class GeneralContainer extends Component {

  componentDidMount(){
    this.props.updateWorld()
  }

  render(){
    if(this.props.show){
      return(
        <div><h1 className="title">World</h1>

          <General world={this.props.world}/>
        </div>
      )
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  return {
    world: state.world,
    show: state.show //show gets updated to false by reducer when a story link is clicked
  }
  };

  const mapDispatchToProps = dispatch => {
    return {
      updateWorld: (world) => dispatch(actionTypes.loadWorld(world)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (GeneralContainer) ;
