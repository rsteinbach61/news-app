import React from 'react';
function Story(props) {

  function createMarkup(){
    return {__html: props.story.content.fields.body}
  }

    if(props.story){
      //let storyBody = props.story.content.fields.body
      return (
        <div className="story" dangerouslySetInnerHTML={createMarkup()}>

        </div>
      )}else {return props.story}
}

export default Story;
