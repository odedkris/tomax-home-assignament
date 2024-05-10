import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

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
        <input
          type='text'
          id='header-search'
          value={inputValue}
          placeholder='Search articles'
          onChange={changeHandler}
        />
        <IconButton type='submit'><SearchIcon /></IconButton>
    </div>
  );
};

export default SearchBar;


{/* <form className='search' onSubmit={submitHandler}>
<label htmlFor='header-search'></label> </form>*/}