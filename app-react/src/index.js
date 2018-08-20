import App from "./components/App";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import React from "react";
import { applyMiddleware, createStore } from "redux";
import { promiseMiddleware } from "./middleware";

const defaultState = {
  appName: "dontgetpoisoned",
  articles: null
};
const reducer = function(state = defaultState, action) {
  switch (action.type) {
    case "HOME_PAGE_LOADED":
      return { ...state, articles: action.payload.articles };
  }
  return state;
};
const store = createStore(reducer, applyMiddleware(promiseMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import registerServiceWorker from "./registerServiceWorker";

// import { createStore } from "redux";

// const defaultState = { checked: false };
// const reducer = function(state = defaultState, action) {
//   switch (action.type) {
//     case "TOGGLE":
//       return { ...state, checked: !state.checked };
//   }
//   return state;
// };
// const store = createStore(reducer);

// class App extends React.Component {
//   render() {
//     return <h1>Hello, World!</h1>;
//   }
// }

// ReactDOM.render(<App />, document.getElementById("root"));

// ReactDOM.render(<App />, document.getElementById("root"));
// registerServiceWorker();
