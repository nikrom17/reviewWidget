import React from "react";
import { StarRating } from "../star-rating";
import { StaffReviewer, VerifiedBuyer, VerifiedReviewer} from "../icons";

import classes from "./review.css";

const review = (props) => {
    let badge = null;
    let badgeText = null;

    if (props.badges.is_staff_reviewer) {
        badge = <StaffReviewer className={classes.badge}/>;
        badgeText='Staff Reviewer';
    } else if (props.badges.is_verified_buyer) {
        badge = <VerifiedBuyer className={classes.badge}/>;
        badgeText='Verified Buyer';
    } else if (props.badges.is_verified_reviewer) {
        badge = <VerifiedReviewer className={classes.badge}/>
        badgeText='Verified Reviewer';
    }
    return (
        <article className={classes.review}>
            <div className={classes.reviewHeading}>
                <StarRating
                    className={classes.starRating}
                    rating={props.rating}
                />
                <div>{props.headline}</div>
            </div>
            <p className={classes.reviewComments}>
                {props.comments}
            </p>
            <aside className={classes.reviewerDetails}>
                <p>
                    <span className={classes.minorHeading}>Submitted </span>
                    <span>1 day ago</span>
                </p>
                <p>
                    <span className={classes.minorHeading}>By </span>
                    <span>{props.nickname}</span>
                </p>
                <p>
                    <span className={classes.minorHeading}>From </span>
                    <span>{props.location}</span>
                </p>
                <p>
                    <span className={classes.minorHeading}>{badge} </span>
                    <span>{badgeText}</span>
                </p>
            </aside>
        </article>
        
    );
};

export default review;