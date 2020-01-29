import React, { useState } from 'react';
import { SearchBar, RepoList, Pagination } from './components';
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

  const modal = modalId > 0 ? (
    <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-content">
        {modalId}
      </div>
      <button className="modal-close is-large" aria-label="close" onClick={closeModal}></button>
    </div>
  ) : null

  return (
    <section className="section is-medium">
      {modal}
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
