var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router')
//Above is the ES6 destructuring syntax

//Below is the ES5 version
// var Route = require('react-router').Route;
// var Router = require('react-router').Router;
// var IndexRoute = require('react-router').IndexRoute;
// var hashHistory = require('react-router').hashHistory;


ReactDOM.render(
  <h1>Boilerplate app!</h1>,
  document.getElementById('app')
);