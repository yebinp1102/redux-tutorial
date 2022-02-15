import React from 'react'
import { connect } from 'react-redux'
import { actionCreators } from '../store'
import styled from 'styled-components'

const ToDo = ({text, onBtnClick, id}) => {
  return (
    <List>
       <li>
        {text}
        <button className='delBtn' onClick={onBtnClick}>DEL</button>
      </li>
    </List>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    onBtnClick : () => dispatch(actionCreators.deleteToDo(ownProps.id))
  }
}

export default connect(null, mapDispatchToProps)(ToDo);

const List = styled.div`
  margin-bottom: 10px;
  border-bottom: 1px solid lightgray;
  padding: 8px;

  li{
    display: flex;
    justify-content: space-between;
    padding: 5px;
    align-items: center;

    .delBtn{
      border: 1px solid salmon;
      padding: 5px;
      border-radius: 8px;
      color: salmon;
      background-color: #fff;
      cursor: pointer;
      transition: all .15s ease-in;
    }
    
    .delBtn:hover{
      color: #fff;
      background-color: salmon;
    }
  }
`;