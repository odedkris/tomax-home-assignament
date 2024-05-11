import { useState } from 'react';
import './searchBar.css'

const SearchBar = (props) => {
  const [inputValue, setInputValue] = useState('');

  const submitHandler = () => {
    console.log(inputValue)
    if (inputValue !== '') {
      props.onChangeSearchInput(inputValue);
      setInputValue('');
    }
  };

  const changeHandler = (event) => {
    event.preventDefault();
    setInputValue(event.target.value);
  };

  return (
    <div className='searchBar'>
      <div className='form'>
        <input
          type='text'
          id='header-search'
          value={inputValue}
          placeholder='Search articles'
          onChange={changeHandler}
        />
        <button className='serach-btn'
          onClick={submitHandler}
        >
          <i className='fa fa-search' aria-hidden='true'></i>
        </button>
      </div>
    </div >
  );
};

export default SearchBar;


{/* <form className='search' onSubmit={submitHandler}>
<label htmlFor='header-search'></label> </form>*/}