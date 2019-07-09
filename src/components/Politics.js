import React from 'react';
import { Link } from 'react-router-dom';

function Politics(props){

  let listLink = []

  if(props.politics){
    //list = props.sports.map(function(head) {return <p> <a href={head.webUrl}>{head.webTitle}</a></p>})

    listLink = props.politics.map(function(head) {

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
    <div className="newsbox">
      {listLink}
    </div>

  )
}
export default Politics;
