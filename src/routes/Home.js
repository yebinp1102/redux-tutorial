import React, { useState } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components'
import { actionCreators } from '../store';
import ToDo from '../components/ToDo';

const Home = ({toDos, addToDo}) => {
  const [text, setText] = useState("");
  const onChange = e => {
    setText(e.target.value);
  }
  const onSubmit = e => {
    e.preventDefault();
    addToDo(text)
    setText("");
  }

  return (
    <div className='Home'>
      <h1>To Do</h1>
        <form onSubmit={onSubmit}>
          <input type="text" value={text} onChange={onChange} />
          <button>ADD</button>
      </form>
      <ul>
        {toDos.map(toDo => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {toDos: state}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToDo : text => dispatch(actionCreators.addToDo(text))
    // addToDo 프로퍼티는 인자로 text를 받는 함수. addToDo 함수가 실행되면 actionCreators의 addToDo 함수 실행
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const Container = styled.div`

`;