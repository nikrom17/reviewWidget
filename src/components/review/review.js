import React from "react";

import { StarRating } from "../star-rating";
import { StaffReviewer, VerifiedBuyer, VerifiedReviewer} from "../icons";
import Aux from "../../hoc/Aux/Aux";
import classes from "./review.css";

const review = (props) => {
  let badge = null;
  let badgeText = null;
  const category = ["Submitted ","By ", "From "];
  const value = [props.created, props.nickname, props.location];

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
    <Aux>
      <header>
        <StarRating
          className={classes.starRating}
          rating={props.rating}
        />
        <h2 className={classes.headline}>{props.headline}</h2>
      </header>
      <section className={classes.reviewBlock}>
        <p className={classes.reviewComments}>
          {props.comments}
        </p>
        <aside className={classes.reviewerDetails}>
          {category.map((category, index) => {
            return (
              <p key={category}>
                <span className={classes.minorHeading}>{category}</span>
                <span>{value[index]}</span>
              </p>
            )
          })}
          <div>
            <span className={classes.badgeSpan}>{badge} </span>
            <span className={classes.badgeText}>{badgeText}</span>
          </div>
        </aside>
      </section>
    </Aux>
  );
};

export default review;