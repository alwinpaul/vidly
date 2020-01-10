import React from 'react';
import Movies from './components/movies';
import Pagination from './components/common/pagination.jsx';
import './App.css';

function App() {
  return (
    <main className="container">
      <Movies />
      <Pagination />
    </main>
  );
}

export default App;
