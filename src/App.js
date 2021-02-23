import { useState } from 'react';
import './App.css';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

function App() {

  const [categories, setCategories] = useState(['Dragon Ball'])
  
  return (
    <div className="App">
      <h1>GifExpertApp</h1>
      <AddCategory setCategories={setCategories} />
      <hr />

      {
        categories.map((category, index) => {
          return (
            <GifGrid key={index} category={category} />
          )
        })
      }

    </div>
  );
}

export default App;
