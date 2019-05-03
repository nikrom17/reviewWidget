import React from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons"
import classes from "./HelpfulButtons.css";

library.add(faThumbsDown, faThumbsUp);

/*
  Helpful Buttons Container
    - displays buttons used to mark reviews as un/helpful
*/

const helpfulButtons = (props) => {
  const thumbsUpTitle = "Click to give this review a helpful vote";
  const thumbsDownTitle = "Click to give this review an unhelpful vote";
  let thumbsUp = classes.icon;
  let thumbsDown = classes.icon;
  let buttonThumbsUp = props.disabled ? [classes.iconBox] : [classes.iconBox, classes.iconBoxHover];
  let buttonThumbsDown = props.disabled ? [classes.iconBox] : [classes.iconBox, classes.iconBoxHover];
  
  if (props.disabled) {
    if (props.voteType === "helpful_votes") {
      buttonThumbsUp.push(classes.selected)
      thumbsUp = classes.iconSelected;
    } else {
      buttonThumbsDown.push(classes.selected);
      thumbsDown = classes.iconSelected;
    }
  }
  return ( 
    <footer className={classes.helpfulButtons}>
      <span className={classes.helpfulText}>Was this review helpful to you?</span>
      <button
        className={buttonThumbsUp.join(" ")}
        title={thumbsUpTitle}
        disabled={props.disabled}
        onClick={() => props.vote(props.index, "helpful_votes")}
      >
        <div className={thumbsUp}> 
          <FontAwesomeIcon icon="thumbs-up" className={thumbsUp} />
          <span className={classes.votes}>{props.helpfulVotes}</span>
        </div>
      </button>
      <button
        className={buttonThumbsDown.join(" ")}
        title={thumbsDownTitle}
        disabled={props.disabled}
        onClick={() => props.vote(props.index, "not_helpful_votes")}
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