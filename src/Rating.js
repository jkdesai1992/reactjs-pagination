import React from "react";

class Rating extends React.Component {
  render() {
    const { ratingStars } = this.props;
    const starSpans = [];

    for (let v = 1; v <= 5; v++) {
      if (v <= ratingStars) {
        starSpans.push(<i key={v}>*</i>);
      } else {
        starSpans.push(<i key={v} className="fas fa-star" />);
      }
    }

    return (
      <div className="pro-list-info">
        <div className="rating">
          <div className="rate">
            <span>{starSpans}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Rating;
