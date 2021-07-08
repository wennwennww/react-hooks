import React from 'react';

function useCounter() {
  const [counter, setCounter] = React.useState(0)

  return { counter, setCounter };
}

export default useCounter;
