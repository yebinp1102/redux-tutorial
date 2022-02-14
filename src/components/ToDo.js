import React from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store'

const ToDo = ({text, onBtnClick, id}) => {
  return (
    <li>
        {text}
        <button onClick={onBtnClick}>DEL</button>
    </li>
  )
}

const dispatchToProps = (dispatch, ownProps) => {
  return{
    onBtnClick : () => dispatch(actionCreators.deleteToDo(ownProps.id))
  }
}

export default connect(null, dispatchToProps)(ToDo);