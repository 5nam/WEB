import React from 'react';
import PropTypes from 'prop-types';

function Food({ name, picture, rating }){ 
  // App.js 파일 안에서 컴포넌트 만들고, Potato 컴포넌트를 App 컴포넌트 안에서 사용함.
  // 이렇게 컴포넌트 안에 컴포넌트를 포함시키는 이유는 파일 이동하면서 코드 작업하기가 불편하기 때문.
  return (
    <div>
      <h2>I like { name }</h2>
      {/* 평점 구하기 */}
      <h4>{rating}/5.0</h4> 
      {/* // alt 속성 값으로 [{name}을 대입하자] */}
      <img src={picture} alt={name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name : 'Kimchi',
    image: 'https://w.namu.la/s/a85e178b2233fa1e3461ae51dba6757e8cc87b215ea326660c85904f61daf0dcd84f8b8733cee71ca34fa743822d5aa1650766f6b2a90118edc5e76974e8305263694a4c2358508602ad7694e2cd022389545b2812f6e86bf29e05e172b53405',
    rating: 5,
  },
  {
    id: 2,
    name: 'Samgyeopsal',
    image:
    'https://src.hidoc.co.kr/image/lib/2021/8/27/1630049987719_0.jpg',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Bibimbap',
    image:
    'https://health.chosun.com/site/data/img_dir/2021/01/27/2021012702508_0.jpg',
    rating: 3,
  },
  {
    id: 4,
    name: 'Doncasu',
    image:'http://mbcmall.imbc.com/store/__icsFiles/afieldfile/2018/12/27/001_1.jpg',
    rating: 5,
  },
  {
    id: 5,
    name: 'Chicken',
    image: 'https://w.namu.la/s/c4b8eb1c9ea25c0e252b81e3aab503097fdd7a7ae00acdba6f86da4e46ad5e3629335e1022104c01db12954074159679a427e9d4f2e0519db064e4203dec3dc04fdbf124789ea8400b3e6793f77a221e',
    rating: 3.5,
  },
]; // foodILike 변수에 빈 배열 저장

/* 일반 함수 정의 방식
function renderFood(dish) {
  return <Food name={dish.name} picture={dish.image} />;
}
*/

// 화살표 함수 작성 방식
// const renderFood = dish=> <Food name={dish.name} picture={dish.image} />;


function App() {
  return (
    <div>
      {/* 여기에 foodILike의 원소가 하나씩 넘어올 것 */}
      {foodILike.map(dish => (
        // key props 를 추가함 -> dish.id
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
  </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number, 
  // 바로 위 코드 오류 발생 : Warining Failed prop type: Invalid prop 'rating' of type 'number' supplied to 'Food', expected 'string'
  // Food  컴포넌트의 rating props 자료형이 string 이어야 하는데, number 라서 문제다.
};

export default App;
