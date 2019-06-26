import React from 'react';

function General(props){
  let list = []
  if(props.world){
    list = props.world.map(function(head) {return <p> <a href={head.webUrl}>{head.webTitle}</a></p>})}
  return(
    <div>

      {list}
    </div>
  )
}
export default General;
