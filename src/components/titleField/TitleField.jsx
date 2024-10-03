import React from "react";

const TitleField = ({ Children }) => {
  return (
    <div className="text-xl text-primary px-3 py-1 border-l-[6px] border-primary font-semibold">
      <h2>{Children}</h2>
    </div>
  );
};

export default TitleField;
