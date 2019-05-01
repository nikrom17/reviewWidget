import React from "react";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsDown, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import classes from "./helpfulButtons.css";

library.add(faThumbsDown, faThumbsUp);

const helpfulButtons = (props) => {
    const thumbsUpTitle = "Click to give this review a helpful vote";
    const thumbsDownTitle = "Click to give this review an unhelpful vote";

    return (
        <div className={classes.helpfulButtons}>
            <span className={classes.wasHelpful}>Was this review helpful to you?</span>
            <button className={classes.iconBox} title={thumbsUpTitle} onClick={() => props.vote(props.index, 'helpful_votes')}>
                <FontAwesomeIcon icon="thumbs-up" />
                <span className={classes.votes}>{props.helpfulVotes}</span>
            </button>
            <button className={classes.iconBox} title={thumbsDownTitle} onClick={() => props.vote(props.index, 'not_helpful_votes')}>
                <FontAwesomeIcon icon="thumbs-down" />
                <span className={classes.votes}>{props.notHelpfulVotes}</span>
            </button>
        </div>
    );
};

export default helpfulButtons;