import React from "react";
import starTrue from "../../img/rating_star_true.svg";
import starFalse from "../../img/rating_star_false.svg";

const RatingBlock = ({ value }) => {
   let stars = [false, false, false, false, false];
   
   return (
      <div className="rating-block">
         {stars.map((item, index) => {
            return index <= value-1 ? <img key={index} src={starTrue} /> : <img key={index} src={starFalse} />;
         })}
      </div>
   );
};

export default RatingBlock;
