import React from 'react';

function Story(props) {

    if(props.story){
      let storyBody = props.story.content.fields.body
  return (
    <div className="story">
    <p>dangerouslySetInnerHtml={storyBody}</p>
    </div>
  )}
  else {return props.story}
}

export default Story;
