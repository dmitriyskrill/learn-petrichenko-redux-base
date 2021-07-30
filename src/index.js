import { createStore } from "redux"
import reducer from "./reducer"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import React from "react"
// import * as actions from "./actions"
import App from "./components/app"
const store = createStore(reducer)
// const { dispatch } = store



ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
)
