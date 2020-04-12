import React from "react";

const Categories = ({ onSelect, active }) => {
  let categoryList = [
    "salads",
    "environment",
    "shrek",
    "frogs",
    "satisfyinggrass",
    "ireland",
    "botany",
    "babyyoda",
    "vegetables",
    "reptiles",
    "nature",
    "ecology",
    "tea",
    "geckos"
  ];

  const handleClick = (event) => {
    onSelect(event);
  };

  return (
    <div className="categories-section">
      {categoryList.map((category) => (
        <div
          onClick={() => handleClick(category)}
          className={
            active === category ? "category category--selected" : "category"
          }
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Categories;
