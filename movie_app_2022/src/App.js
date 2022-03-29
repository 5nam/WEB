import React from 'react';

function Food({fav}){ 
  // App.js 파일 안에서 컴포넌트 만들고, Potato 컴포넌트를 App 컴포넌트 안에서 사용함.
  // 이렇게 컴포넌트 안에 컴포넌트를 포함시키는 이유는 파일 이동하면서 코드 작업하기가 불편하기 때문.
  return <h1>I like { fav }</h1>;
}

function App() {
  return (
  <div>
      <h1>Hello</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="samgiopsal" />
      <Food fav="chukumi" />
  </div>);
}

export default App;
