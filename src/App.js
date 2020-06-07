import React from 'react';
import { connect } from 'react-redux';
import { checkFound, } from './functions/functions';
import Cards from './components/card/card';
import Form from './components/form/form';
import Alert from './components/alert/alert';
import Spinner from './components/spinner/spinner';
import Header from './components/header/header';

import './App.css'

function App({ loading, error, repos, userFound, orgs}) {

  return (
    <div className = 'main_container'>
      <div className = 'container'>
        <Header/>

        <Form/>

         {checkFound(userFound)?
            <div className='info_container'>
              <div className='repo_container'><Cards data={repos} attr='Repositories'/></div>
              <div className='org_container'><Cards data={orgs} attr='Organisations'/></div>
            </div>
            :
            null
          }

          <Spinner loading={loading}/>

          <Alert error = {error}/>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  loading: state.user.loading,
  error: state.user.error,
  repos: state.user.repo,
  userFound: state.user.userFound,
  orgs: state.user.org,
})

export default connect(mapStateToProps)(App);