import React from "react";

import Rating from "./Rating";

const HeaderInfo = () => {
  return (
    <>
      <h1 className="text-left text-3xl font-bold xxs:text-4xl">
        Biochemistry Quiz
      </h1>
      <Rating averageRating={3} numOfReviews={10} />
    </>
  );
};

export default HeaderInfo;
