import React from "react";

const SectionTitle = ({ headign, subHeding }) => {
  return (
    <div>
      <div className="text-center mx-auto w-1/4">
        <p className="text-lg italic text-orange-500">{subHeding}</p>
        <h4 className="text-4xl py-4 mb-12 mt-6  border-t-2 border-b-2">
          {headign}
        </h4>
      </div>
    </div>
  );
};

export default SectionTitle;
