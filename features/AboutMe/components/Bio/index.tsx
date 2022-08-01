import React from "react";

interface Props {
  bio: string;
}

const Bio: React.FC<Props> = ({ bio }) => {
  return (
    <div className="px-8 py-4 text-justify">
      <p>{bio}</p>
    </div>
  );
};

export default Bio;
