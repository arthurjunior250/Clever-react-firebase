import './App.css';
import React, { useEffect, useState } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core/';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('tasks').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  })

  const addTodo = (event) => {
    event.preventDefault();
    db.collection('tasks').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="app">
      
      <form>
        <FormControl>
          <InputLabel>Write a TODO</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>

        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add Todo
        </Button>       
      </form>

      <ul>
        {todos.map(todo => (
          <Todo text={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;