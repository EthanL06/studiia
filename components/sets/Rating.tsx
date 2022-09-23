import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";

type RatingProps = {
  numOfReviews: number;
  averageRating: number;
};

const Rating = ({ numOfReviews, averageRating }: RatingProps) => {
  return (
    <>
      <div className="flex gap-x-2">
        {[...Array(5)].map((x, index) => (
          <Star filled={index < averageRating} key={index} />
        ))}
      </div>
      <div>
        <p className="text-base font-medium text-primary/80">
          {numOfReviews} reviews
        </p>
      </div>
    </>
  );
};

type StarProps = {
  filled?: boolean;
};

const Star = ({ filled = false }: StarProps) => {
  return (
    <>
      {filled ? (
        <StarIcon className="h-6 w-6 text-yellow-300" />
      ) : (
        <StarIcon className="h-6 w-6 text-slate-300" />
      )}
    </>
  );
};

export default Rating;
