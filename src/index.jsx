import React from "react";
import ReactDOM from "react-dom/client";
import './index.css'
import 'react-toastify/dist/ReactToastify.css';

import { App } from "./App";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);

// <a href="/" title="title"><p>My link</p></a>
// const link = createElement()

// const paragraph = React.createElement('p', null, "My link")

// const link = React.createElement("a", { href: "/", title: "title" }, "My link");
// const link2 = React.createElement(
//   "a",
//   { href: "/contacts", title: "title" },
//   "My link2"
// );

// const linkComponent = ({ href, title, children }) =>
//   React.createElement("a", { href, title }, children);
// const linkComponent = (props) => React.createElement("a", { href: props.href, title: props.title }, props.children)

// <img/>

// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
