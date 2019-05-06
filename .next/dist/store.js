"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = undefined;

var _redux = require("redux");

var _reduxTooltip = require("redux-tooltip");

var initialState = {
  title: "With Redux Tooltip"
};

var appReducer = function appReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    default:
      return state;
  }
};

var initStore = exports.initStore = function initStore() {
  var initState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { appReducer: initialState };

  return (0, _redux.createStore)((0, _redux.combineReducers)({ appReducer: appReducer, tooltip: _reduxTooltip.reducer }), initState);
};