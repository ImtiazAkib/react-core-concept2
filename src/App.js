import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Countries from './components/Countries/Countries';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
      <LoadUsers></LoadUsers>
      <Score name="kalu"></Score>
      <Score name="lalu"></Score>
      <Score name="halu"></Score>
      <Score name="mamu"></Score>
    </div>
  );
}

function LoadUsers(){
  const [users, setUsers] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  } , [])
  return(
    <div>
      <h3>This is loadusers inside.User loaded </h3>
      {
        users.map(user=><User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}

function User(props){
  return(
    <div className="user">
      <h3>Name: {props.name}</h3>
      <h3>Email: {props.email}</h3>
    </div>
  )
}

function Score(props){
  const [run, setRun] = useState(0)

  const style= {
    backgroundColor:"lightblue",
    border:"2px solid grey",
    margin:"20px",
    borderRadius:"10px",
    padding:"10px"
  }

  const Add4Run = () =>{
    const newRun = run+4;
    setRun(newRun);
  }
  const Add6Run = () =>{
    const newRun = run+6;
    setRun(newRun);
  }
  return(
    <div style={style}>
      <h3>My name is: {props.name}</h3>
      <h4>My total run is:{run}</h4>
      <button onClick={Add4Run}>Add run 4</button>
      <button onClick={Add6Run}>Add run 6</button>
    </div>
  )
}

export default App;
