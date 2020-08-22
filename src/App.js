import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {
  // const nayoksName = ['BappiRazz', 'Shuvo', 'Saymon', 'Deepjol'];

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setProducts(data));
  })

  // const products = [
  //   {name: 'Special-Doi', price: 220},
  //   {name: 'Shahi-Doi', price: 300},
  //   {name: 'Khirsha-Doi', price: 400},
  //   {name: 'Diabates-Doi', price: 350}
  // ];

  // const nayoksName = ['BappiRazz', 'Shuvo', 'Saymon'];(similar look different data) --->(2)
  return (
    <div className="App">
      <MoviesCounter></MoviesCounter>

      {/* {      ***array method****
        nayoksName.map(nk => <Nayoks name = {nk}></Nayoks>)
      } */}

      {
        products.map(pd => <Product name = {pd.name} key={pd.id} email = {pd.email}></Product>)
      }

      {/* <Nayoks name = 'Jasim' age = '56'></Nayoks>
      <Nayoks name = 'Dijpol'></Nayoks>   when we use (similar look different data.)--->(2)
      <Nayoks name = {nayoksName[0]}></Nayoks>
      <Nayoks name = {nayoksName[1]}></Nayoks> */}


      {/* <Nayok></Nayok>             when we use (similar look similar data.)----> (1)
      <Nayok></Nayok>
      <Nayok></Nayok> */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}


/***************** map start *********************/


  /*** array method ****/
// function Nayoks(props){
//   return (
//     <div>
//       <h2>Ami Nayok-{props.name}</h2>
//       <h3>I have done 5 movies in 10 years</h3>
//     </div>
//   )
// }

    /* object array method*/
function Product(props){
  return (
    <div style = {{border: '2px solid black', margin: '10px'}}>
      <h2>Doi ar nam: {props.name}</h2>
      <h3>Doi ar price: {props.email}</h3>
    </div>
  )
}

/***************** map End *********************/




/***************** Event handler start *********************/
function MoviesCounter(){
  const [count, setCount] = useState(0);
  const handleClick = () => setCount(count + 1);
  return (
    <div style = {{border: '2px solid purple', margin: '10px', paddingTop: '10px'}}>
      <button onClick = {handleClick}>Add Movie</button>
      <h3>Number of movies: {count}</h3>
      <MovieDisplay movies = {count}> </MovieDisplay>
      <MovieDisplay movies = {count + 1}></MovieDisplay>
      <MovieDisplay movies = {count + 3}></MovieDisplay>
      <MovieDisplay movies = {count + 6}></MovieDisplay>
    </div>
  )
}

function MovieDisplay(props){
return <h3>I have acted: {props.movies}</h3>
}

/***************** Event handler End *********************/


//when we use (similar look different data.)-----> (2)

// function Nayoks(props){
//   return (
//     <div style = {{border: '2px solid purple', margin: '10px'}}>
//       <h1>Ami Nayok - {props.name}</h1>
//       <h3>I have done 5 movies in {props.age || 30} years</h3>
//     </div>
//   )
// }


//  when we use (similar look similar data.)---> (1)

// function Nayok(){
//   const style= {
//     border: '2px solid purple',
//     margin: '20px'
//   }
//   return (
//     <div style = {style}>
//       <h1>Ami khol Nayok</h1>
//       <h3>I have done 5 movies</h3>
//     </div>
//   )
// }

export default App;
