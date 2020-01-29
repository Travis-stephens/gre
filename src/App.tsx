import React, { useState, useEffect } from 'react';
import { SearchBar, RepoList, Pagination, RepoModal } from './components';
import './App.scss';
import { connect } from 'react-redux';

const App = () => {
  const [modalId, setModalId] = useState(0)

  const openModal = (id: number) => {
    setModalId(id)
  }

  const closeModal = () => {
    setModalId(0)
  }

  const escFunction = (event: KeyboardEvent) => {
    if (event.keyCode === 27) {
      closeModal()
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);
  })

  return (
    <section className="section is-medium">
      <RepoModal repoId={modalId} fnCloseModal={closeModal} />
      <div className="container">
        <h1 className="title has-text-white	is-size-1 is-size-4-mobile has-text-centered">Github Repository Explorer</h1>
        <SearchBar />
        <RepoList fnHandleClick={openModal} />
        <Pagination />
      </div>
    </section>
  );
}

export default connect()(App)
