import React from "react";
import { StarRating } from "../star-rating";
import { StaffReviewer, VerifiedBuyer, VerifiedReviewer} from "../icons";

const review = (props) => {
    let badge = null;

    if (props.badges.is_staff_reviewer) {
        badge = <StaffReviewer />;
    } else if (props.badges.is_verified_buyer) {
        badge = <VerifiedBuyer />;
    } else if (props.badges.is_verified_reviewer) {
        badge = <VerifiedReviewer />
    }
    return (
        <div>
            <div>
                <StarRating
                    rating={props.rating}
                />
                <div>{props.headline}</div>
            </div>
            <div>
                <div>{props.comments}</div>
            </div>
            <div>
                <p>Submitted <span></span></p>
                <p>By <span>{props.nickname}</span></p>
                <p>From <span>{props.location}</span></p>
                {badge}
            </div>
        </div>
        
    );
};

export default review;