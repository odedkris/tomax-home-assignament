import { useState } from 'react';
import './searchBar.css'

const SearchBar = (props) => {
  const [inputValue, setInputValue] = useState(props.value);

  const submitHandler = (event) => {
    event.preventDefault();
    props.onChangeSearchInput(inputValue);
    setInputValue('');
  };

  const changeHandler = (event) => {
    event.preventDefault();
    setInputValue(event.target.value);
  };

  return (
    <div className='searchBar'>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          id='header-search'
          value={inputValue}
          placeholder='Search articles'
          onChange={changeHandler}
        />
        <button className='serach-btn'
          type='submit'
        >
          <i className='fa fa-search' aria-hidden='true'></i>
        </button>
      </form>
    </div >
  );
};

export default SearchBar;


{/* <form className='search' onSubmit={submitHandler}>
<label htmlFor='header-search'></label> </form>*/}