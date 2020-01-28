import React, { useState, useEffect } from 'react';
import { SearchBar, RepoList } from './components';
import './App.scss';
import { connect } from 'react-redux'

const App = (props: any) => {

  useEffect(() => {
    console.log(props)
  });

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

export default connect()(App)
