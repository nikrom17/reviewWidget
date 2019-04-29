import * as React from "react";
import PropTypes from "prop-types";

const ACTIVE_COLOR = "#f59331";
const INACTIVE_COLOR = "#ddd";

export class StarRating extends React.PureComponent {
  static propTypes = {
    rating: PropTypes.number.isRequired
  };

  render() {
    return (
      <svg
        viewBox="0 0 101 18"
        {...this.props}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="Gradient0">
            <stop offset="0%" stopColor={INACTIVE_COLOR} />
            <stop offset="10%" stopColor={INACTIVE_COLOR} />
          </linearGradient>
          <linearGradient id="Gradient10">
            <stop offset="0%" stopColor={ACTIVE_COLOR} />
            <stop offset="10%" stopColor={ACTIVE_COLOR} />
            <stop offset="10%" stopColor={INACTIVE_COLOR} stopOpacity="1" />
            <stop offset="100%" stopColor={INACTIVE_COLOR} />
          </linearGradient>
          <linearGradient id="Gradient20">
            <stop offset="0%" stopColor={ACTIVE_COLOR} />
            <stop offset="20%" stopColor={ACTIVE_COLOR} />
            <stop offset="20%" stopColor={INACTIVE_COLOR} stopOpacity="1" />
            <stop offset="100%" stopColor={INACTIVE_COLOR} />
          </linearGradient>
          <linearGradient id="Gradient30">
            <stop offset="0%" stopColor={ACTIVE_COLOR} />
            <stop offset="30%" stopColor={ACTIVE_COLOR} />
            <stop offset="30%" stopColor={INACTIVE_COLOR} stopOpacity="1" />
            <stop offset="100%" stopColor={INACTIVE_COLOR} />
          </linearGradient>
          <linearGradient id="Gradient40">
            <stop offset="0%" stopColor={ACTIVE_COLOR} />
            <stop offset="40%" stopColor={ACTIVE_COLOR} />
            <stop offset="40%" stopColor={INACTIVE_COLOR} stopOpacity="1" />
            <stop offset="100%" stopColor={INACTIVE_COLOR} />
          </linearGradient>
          <linearGradient id="Gradient50">
            <stop offset="0%" stopColor={ACTIVE_COLOR} />
            <stop offset="50%" stopColor={ACTIVE_COLOR} />
            <stop offset="50%" stopColor={INACTIVE_COLOR} stopOpacity="1" />
            <stop offset="100%" stopColor={INACTIVE_COLOR} />
          </linearGradient>
          <linearGradient id="Gradient60">
            <stop offset="0%" stopColor={ACTIVE_COLOR} />
            <stop offset="60%" stopColor={ACTIVE_COLOR} />
            <stop offset="60%" stopColor={INACTIVE_COLOR} stopOpacity="1" />
            <stop offset="100%" stopColor={INACTIVE_COLOR} />
          </linearGradient>
          <linearGradient id="Gradient70">
            <stop offset="0%" stopColor={ACTIVE_COLOR} />
            <stop offset="70%" stopColor={ACTIVE_COLOR} />
            <stop offset="70%" stopColor={INACTIVE_COLOR} stopOpacity="1" />
            <stop offset="100%" stopColor={INACTIVE_COLOR} />
          </linearGradient>
          <linearGradient id="Gradient80">
            <stop offset="0%" stopColor={ACTIVE_COLOR} />
            <stop offset="80%" stopColor={ACTIVE_COLOR} />
            <stop offset="80%" stopColor={INACTIVE_COLOR} stopOpacity="1" />
            <stop offset="100%" stopColor={INACTIVE_COLOR} />
          </linearGradient>
          <linearGradient id="Gradient90">
            <stop offset="0%" stopColor={ACTIVE_COLOR} />
            <stop offset="90%" stopColor={ACTIVE_COLOR} />
            <stop offset="90%" stopColor={INACTIVE_COLOR} stopOpacity="1" />
            <stop offset="100%" stopColor={INACTIVE_COLOR} />
          </linearGradient>
          <linearGradient id="Gradient100">
            <stop offset="0%" stopColor={ACTIVE_COLOR} />
            <stop offset="100%" stopColor={ACTIVE_COLOR} />
          </linearGradient>
        </defs>
        <FillGroup rating={this.props.rating} />
      </svg>
    );
  }
}

const getFills = rating => {
  const fills = Array(~~rating).fill("url(#Gradient100)");

  if (fills.length < 5) {
    const value = Number((rating - fills.length).toFixed(1)) * 100;
    fills.push(`url(#Gradient${value})`);

    while (fills.length < 5) {
      fills.push("url(#Gradient0)");
    }
  }
  return fills;
};

const FillGroup = ({ rating }) =>
  getFills(rating).map((fill, index) => {
    return (
      <g
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        transform={`translate(${20 * index})`}
        key={index}
      >
        <rect fill={fill} width="18.3333333" height="18.3333333" rx="2" />
        <polygon
          fill="#FFFFFF"
          points="9.16666667 12.9166667 4.75827727 15.2342941 5.60020473 10.3254804 2.03374279 6.84903921 6.96247197 6.13285294 9.16666667 1.66666667 11.3708614 6.13285294 16.2995905 6.84903921 12.7331286 10.3254804 13.5750561 15.2342941"
        />
      </g>
    );
  });
