import { createStore } from "redux";
// What is store? where to put ur data(=state in here)
// then What is state? the data is changed in my application

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

const countModifier = ( count = 0, action) => {
  if (action.type === "ADD") {
    return count + 1;
  } else if ( action.type === "MINUS"){
    return count - 1;
  }else {
    return count;
  }
}
// action은 리덕스에서 함수를 부를 때 사용되는 두번째 인자
// 위 예제에서는 action이 countModifier와 소통하기 위한 방법임
// 즉 count라는 state를 +1 해야하는지 -1 해야하는지 알려주는 것이 action

const countStore = createStore(countModifier);
const onChange = () => {
  number.innerText = countStore.getState();
}
countStore.subscribe(onChange);
//createStore은 반드시 인자로 reducer을 받고
// reducer은 반드시 state값을 변경하는 함수여야 한다.
// reducer가 리턴하는 값은 data가 된다. 

// console.log(countStore.getState());
// action을 countModifier에게 보내기 위해서는 dispatch라는 메서드를 사용해야 한다.
// 28번째 줄 해석 : store에 action을 dispatch하면, 리덕스가 countModifier를 부르고
// 해당 action에 대한 정보를 countModifier의 파라미터로 넘겨준다. 
const handleAdd = () => {
  countStore.dispatch({type:"ADD"})
}
const handleMius = () => {
  countStore.dispatch({type:"MINUS"})
}
add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMius);

console.log(countStore.getState());


// 정리
// 리듀서는 현재 상태의 어플리케이션과 함께 불려지는 함수.
// 현재 상태가 지정되지 않을 경우를 대비해 initialState를 지정하는 것이 일반적. 
// 리듀서는 파라미터로 state와 action을 받음.
// action은 리듀서와 소통하는 방법
// 리듀서가 리턴하는 것은 어플리케이션의 state가 된다. 
// 리듀서에게 action을 보내기 위해서는 dispatch를 이용해야 함
// dispatch는 리듀서를 불러서 현재 state와 내가 보낸 action을 조합.
// action은 반드시 객체여야 하고 type을 프로퍼티로 가져야 한다.
// 변화를 store에서 감지하고 싶다면 ? subscribe 메서드 사용하면, store이 바귈 때마다 onChange를 실행.
// 여기서 onChange는 html을 업데이트 하는 함수.