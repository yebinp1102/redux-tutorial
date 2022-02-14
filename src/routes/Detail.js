import React from 'react'
import { useParams } from 'react-router-dom';

const Detail = ({toDos}) => {
  const id = useParams();

  return (
    <div>Detail</div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return{toDos: state}
}

export default Detail;