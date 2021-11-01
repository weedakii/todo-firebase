import { Button, FormControl, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './App.css';
import db from './components/firebase';
import Todo from './components/Todo';
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(e => ({id: e.id,time: e.data().timestamp,todo: e.data().todo})))
    })
  }, [])

  const adding = (e) =>{
    e.preventDefault()

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setTodos([...todos, input])
    setInput('')
  }
  return (
    <div className="App">
      <h1>Welcome weedakii</h1>
      <form>
          <FormControl>
            <TextField 
              label="Todo"
              color="secondary"
              margin="normal"
              size="small"
              onChange={e => {setInput(e.target.value)}}
              value={input}
            />
            <Button
              variant="contained" 
              color="secondary"
              type="submit"
              onClick={adding}
              disabled={!input}
            >Add</Button>
          </FormControl>
        </form>
      <ul>
        {todos.map((e, i) => (
          <Todo todo={e} key={i}/>   
        ))}
      </ul>
    </div>
  );
}

export default App;
