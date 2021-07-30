import React from "react"
import { connect } from "react-redux"
// import { bindActionCreators } from "redux"
import * as actions from "../actions"

const Counter = ({ counter, inc, dec, res }) => {
  return (
    <div className="content">
      <div className="counter-wrap">
        <h1 id="counter">{counter}</h1>
      </div>
      <div className="btn-block">
        <button onClick={inc} id="inc" className="btn btn-inc">
          +
        </button>
        <button onClick={dec} id="dec" className="btn btn-dec">
          -
        </button>
        <button onClick={res} id="res" className="btn btn-res">
          res
        </button>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    counter: state,
  }
}
// const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch)

export default connect(mapStateToProps, actions)(Counter)
