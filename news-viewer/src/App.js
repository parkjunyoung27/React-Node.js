import { useState, useCallback } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';
import Categories from './components/Categories';

const App = () => {
  const [category, setCategory] = useState('all'); // 기존에 useState로 관리 
  const onSelect = useCallback(category => setCategory(category), []);

  return(
      <>
        <Categories category={category} onSelect={onSelect}/>
        <NewsList category={category}/>
      </>
    ); 
};

export default App;
