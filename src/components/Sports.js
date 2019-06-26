import React from 'react';
//import {NavLink} from 'react-router-dom';

function Sports(props){
let list = []
if(props.sports){
list = props.sports.map(function(head) {return <p> <a href={head.webUrl}>{head.webTitle}</a></p>})}



  return(
    <div>

      {list}
    </div>
  )
}
export default Sports;

// <button onClick={props.changeText}> Change The Message</button>
// <button onClick={props.changeText2}> Change The Message 2</button>

//{props.sports.results[0].webTitle}
