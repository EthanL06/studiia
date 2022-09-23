import React from "react";

import Rating from "./Rating";
type Props = {};

const HeaderInfo = (props: Props) => {
  return (
    <>
      <h1 className="text-left text-4xl font-bold">Biochemistry Quiz</h1>
      <div className="mt-2 flex items-end gap-x-4">
        <Rating averageRating={3} numOfReviews={10} />
      </div>
    </>
  );
};

export default HeaderInfo;
