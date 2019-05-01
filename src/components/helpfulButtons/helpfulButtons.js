import React from "react";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import classes from "./helpfulButtons.css";

library.add(faThumbsDown, faThumbsUp);


const helpfulButtons = (props) => {
  const thumbsUpTitle = "Click to give this review a helpful vote";
  const thumbsDownTitle = "Click to give this review an unhelpful vote";
  let thumbsUp = classes.icon;
  let thumbsDown = classes.icon;
  let buttonThumbsUp = props.disabled ? [classes.iconBox] : [classes.iconBox, classes.iconBoxHover].join(' ');
  let buttonThumbsDown = props.disabled ? [classes.iconBox] : [classes.iconBox, classes.iconBoxHover].join(' ');
  
  if (props.disabled) {
    if (props.voteType === 'helpful_votes') {
      buttonThumbsUp.push(classes.selected)
      buttonThumbsUp = buttonThumbsUp.join(' ');
      thumbsUp = classes.iconSelected;
    } else {
      buttonThumbsDown.push(classes.selected);
      buttonThumbsDown = buttonThumbsDown.join(' ');
      thumbsDown = classes.iconSelected;
    }
  }
  return (
    <footer className={classes.helpfulButtons}>
      <span className={classes.helpfulText}>Was this review helpful to you?</span>
      <button
        className={buttonThumbsUp}
        title={thumbsUpTitle}
        disabled={props.disabled}
        onClick={() => props.vote(props.index, 'helpful_votes')}
      >
        <div className={thumbsUp}> 
          <FontAwesomeIcon icon="thumbs-up" className={thumbsUp} />
          <span className={classes.votes}>{props.helpfulVotes}</span>
        </div>
      </button>
      <button
        className={buttonThumbsDown}
        title={thumbsDownTitle}
        disabled={props.disabled}
        onClick={() => props.vote(props.index, 'not_helpful_votes')}
      >
        <div className={thumbsDown}>
          <FontAwesomeIcon icon="thumbs-down"/>
          <span className={classes.votes}>{props.notHelpfulVotes}</span>
        </div>
      </button>
    </footer>
  );
};

export default helpfulButtons;