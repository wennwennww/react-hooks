import React from "react";
// import useCounter from '../hooks/useCounter';

const ButtonClickAction = () => {
  const [counter, setCounter] = React.useState(0);
  // const {counter, setCounter} = useCounter();

  return (
    <button className="button--cancel" onClick={() => setCounter((oldVal) => {return oldVal += 1})}>Btn clicks count: {counter}</button>
  )
}


export default ButtonClickAction;