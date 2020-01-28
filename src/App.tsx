import React from 'react';
import { SearchBar, RepoList } from './components';
import './App.scss';

const App = () => {
  return (
    <section className="section is-medium">
      <div className="container">
        <h1 className="title has-text-white	is-size-1 is-size-4-mobile has-text-centered">Github Repository Explorer</h1>
        <SearchBar />
        <RepoList />
      </div>
    </section>
  );
}

export default App;
