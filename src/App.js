import React from 'react';
import ButtonClickAction from './components/ButtonClickAction';
import ButtonMoveAction from './components/ButtonMoveAction';

const App = () => {
  // const [keyword, setKeyword] = React.useState(0);
  // const [keyword1, setKeyword1] = React.useState(0);

  // React.useEffect(() => {
  //   console.log('每次渲染');
  // })
  // React.useEffect(() => {
  //   console.log('只渲染一次');
  // }, [])

  // React.useEffect(() => {
  //   console.log('keyword動了渲染');
  // }, [keyword])

  // React.useEffect(() => {
  //   console.log('keyword1動了渲染');
  // }, [keyword1])



  return (
    <div>
      {/* <input type="text" onChange={(event) => { setKeyword(event.target.value) }} />
      <input type="text" onChange={(event) => { setKeyword1(event.target.value) }} /> */}
      <ButtonClickAction />
      <ButtonMoveAction />
    </div>
  )
}

export default App;
