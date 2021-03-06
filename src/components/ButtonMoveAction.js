import React from "react";
// import useCounter from '../hooks/useCounter';

const ButtonMoveAction = () => {
  // const {counter, setCounter} = useCounter();
  const [counter, setCounter] = React.useState(0);
  return (
    <button className="button--accept" onMouseOut={() => setCounter((oldVal) => {return oldVal += 1})}>Mouse out count: {counter}</button>
  )
}


export default ButtonMoveAction;