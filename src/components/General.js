import React from 'react';
import {Link} from 'react-router-dom';
function General(props){

  let listLink = []

  if(props.world){
    //list = props.sports.map(function(head) {return <p> <a href={head.webUrl}>{head.webTitle}</a></p>})

    listLink = props.world.map(function(head) {

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
export default General;

// let list = []
// if(props.world){
//   list = props.world.map(function(head) {return <p> <a href={head.webUrl}>{head.webTitle}</a></p>})}
