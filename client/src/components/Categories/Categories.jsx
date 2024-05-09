import { useState } from "react";
import "./categories.css";

const categories = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];

const Categories = (props) => {
  const [chosenCategory, setChosenCategory] = useState("general");

  return (
    <div id="categories" className="categories">
      {categories.map((category) => (
        <button
          id={category}
          key={category}
          className={`category ${category === chosenCategory ? "chosen" : ""}`}
          onClick={() => {
            setChosenCategory(category);
            props.onChangeCategory(category)
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
