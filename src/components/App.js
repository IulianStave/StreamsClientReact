import React from "react";
import { Router, Route } from "react-router-dom";
import history from '../history';

import Header from './Header';
import StreamCreate from './streams/StreamCreate';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';


const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <Header/>
        <Route path="/" exact component={StreamList} />
        <Route path="/streams/new" component={StreamCreate} />
        <Route path="/streams/delete" component={StreamDelete} />
        <Route path="/streams/show" component={StreamShow} />
        <Route path="/streams/edit/:id" component={StreamEdit} />
      </Router>
    </div>
  );
};

export default App;
