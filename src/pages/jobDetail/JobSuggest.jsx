import React from "react";
import ItemJobSuggest from "@/components/itemJobSuggest/ItemJobSuggest";
import TitleField from "@/components/titleField/TitleField";

const JobSuggest = () => {
  return (
    <div className="bg-secondary rounded-xl p-5">
      <TitleField Children={"Gợi ý việc làm phù hợp"}></TitleField>
      <ItemJobSuggest></ItemJobSuggest>
    </div>
  );
};

export default JobSuggest;
