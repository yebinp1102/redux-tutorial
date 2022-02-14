import React, { useState } from 'react'
import styled from 'styled-components'

const Home = () => {
  const [text, setText] = useState("");
  const onChange = e => {
    setText(e.target.value);
  }
  const onSubmit = e => {
    e.preventDefault();
    setText("");
  }

  return (
    <Container>
      <h1>To Do</h1>
        <form onSubmit={onSubmit}>
          <input type="text" value={text} onChange={onChange} />
          <button>ADD</button>
      </form>
    </Container>
  )
}

export default Home;

const Container = styled.div`
`;