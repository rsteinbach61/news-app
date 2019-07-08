import React from 'react';
//import { Link } from 'react-router-dom';

function Politics(props){
console.log(process.env.API_KEY)
  let list = []
  if(props.politics){
  list = props.politics.map(function(head) {return <p> <a href={head.apiUrl + "?&show-fields=all&api-key=" + process.env.REACT_APP_API_KEY}>{head.webTitle}</a></p>})}


  return(
    <div>
      {list}
    </div>

  )
}
export default Politics;
