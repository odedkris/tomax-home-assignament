import { useState } from 'react';
import './App.css';
import NewsFeed from './components/NewsFeed/NewsFeed';

function App() {
  const [chosenCategory, setChosenCategory] = useState('general')
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body>
        <NewsFeed category={chosenCategory} searchTerm={searchTerm}/>
      </body>
    </div>
  );
}

export default App;
