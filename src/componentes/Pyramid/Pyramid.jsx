import React, { useState } from "react";
import "./Pyramid.css";

const Pyramid = ({ categories }) => {
  const [expandedCategories, setExpandedCategories] = useState([]);

  const toggleCategory = (category) => {
    if (expandedCategories.includes(category)) {
      setExpandedCategories(expandedCategories.filter((c) => c !== category));
    } else {
      setExpandedCategories([...expandedCategories, category]);
    }
  };

  return (
    <div className="category-tree">
      {categories.map((category, index) => (
        <div
          key={index}
          className={`level level-${category.level}`}
          style={{
            
            backgroundColor: "rgb(0, 0, 0, 0.6",
            color: "#fff",
            backgroundImage: `url(${category.backgroundImageUrl})`,
            cursor: "pointer",
            border: "1px solid #cccccc93",
            alignItems: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          <span
            className="category"
            onClick={() => toggleCategory(category.label)}
          >
            {category.label}
          </span>
          {expandedCategories.includes(category.label) &&
            category.subcategories && (
              <Pyramid categories={category.subcategories} />
            )}
        </div>
      ))}
    </div>
  );
};

export default Pyramid;
