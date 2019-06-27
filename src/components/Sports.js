import React from 'react';
import {Link} from 'react-router-dom';

function Sports(props){

let listLink = []

if(props.sports){
  //list = props.sports.map(function(head) {return <p> <a href={head.webUrl}>{head.webTitle}</a></p>})

  listLink = props.sports.map(function(head) {

    return <p><Link to={{
          pathname: `/story/2}`,
          state: `${head.apiUrl}`
        }}>{head.webTitle}
        </Link></p>
    //head.apiUrl
      }
    )
  }

  return(
    <div>
      {listLink}
    </div>
  )
}

export default Sports;

// <button onClick={props.changeText}> Change The Message</button>
// <button onClick={props.changeText2}> Change The Message 2</button>

//{props.sports.results[0].webTitle}
