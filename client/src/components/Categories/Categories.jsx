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

  return (
    <div id="categories" className="categories">
      {categories.map((category) => (
        <button
          id={category}
          key={category}
          className='category' 
          onClick={() => {
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
