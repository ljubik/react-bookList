import React, { useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import BookTable from './component/BookTable';
import Header from "./component/Header";
import AddBook from './component/AddBook';
import Home from "./component/Home";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

export default function App() {

  return (
    <>
    <Router>
    <Header />
      <div>
        <Switch>
          <Route path="/BookTable">
            <BookTable />
          </Route>
          <Route path="/AddBook">
            <AddBook />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}
