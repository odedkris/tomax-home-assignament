import { useState } from 'react';

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
    <form onSubmit={submitHandler}>
      <label htmlFor='header-search'></label>
      <input
        type='text'
        id='header-search'
        value={inputValue}
        placeholder='Search articles'
        onChange={changeHandler}
        name='s'
      />
      <button type='submit'>Search</button>
    </form>
  );
};

export default SearchBar;
