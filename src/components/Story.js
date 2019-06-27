import React from 'react';

function Story(props) {

    if(props.story){
  return (
    <div>
    {props.story.content.fields.bodyText}
    </div>
  )}
  else {return props.story}
}

export default Story;
