import React, { useState } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components'
import { actionCreators } from '../store';
import ToDo from '../components/ToDo';

const Home = ({toDos, addList}) => {
  const [text, setText] = useState("");
  const onChange = e => {
    setText(e.target.value);
  }
  const onSubmit = e => {
    e.preventDefault();
    addList(text)
    setText("");
  }

  return (
    <Container>
      <Title>To Do List</Title>
      <FormContainer>
        <form onSubmit={onSubmit}>
            <input className='textInput' type="text" placeholder='What to do for today?' value={text} onChange={onChange} />
            <button className='addBtn'>ADD</button>
        </form>
      </FormContainer>
      <ListContainer>
        {toDos.map(toDo => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ListContainer>
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {toDos: state}
}

const mapDispatchToProps = (dispatch) => {
  return {
    addList : text => dispatch(actionCreators.addToDo(text))
    // addToDo 프로퍼티는 인자로 text를 받는 함수. addToDo 함수가 실행되면 actionCreators의 addToDo 함수 실행
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const Container = styled.div`
  width: 500px;
  height: 600px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-conent: center;
  align-items: center;
  margin: 200px auto 0 auto;
  padding: 20px;
  overflow-y: scroll;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
  border-bottom: 3px dashed lightblue;
  width: 100%;
  text-align: center;
  padding: 10px;
`;

const FormContainer = styled.div`
  padding: 10px;
  margin-top: 10px;
  width: 100%;
  
  form{
    display: flex;
  }

  .textInput{
    flex: 1;
    margin-right: 20px;
    outline: none;
    border: 1px solid lightgray;
    padding: 10px;
    border-radius: 5px;
  }

  .addBtn{
    border: none;
    background: lightblue;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
  }
  .addBtn:hover{
    background-color: blue;
    color: #fff;
  }
`;

const ListContainer = styled.div`
  width: 100%;
  padding: 15px;
`;