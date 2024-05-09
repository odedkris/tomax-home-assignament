import { useState } from "react";

const categories = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];

const Categories = async (props) => {
  const [chosenCategory, setChosenCategory] = useState("general");

  return (
    <div id="categories" className="categories">
      {props.categories.map((category) => (
        <button
          id={category}
          className={`category ${category === chosenCategory ? "chosen" : ""}`}
          onClick={() => {
            setChosenCategory(category);
            props.changeCategory(category);
          }}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
