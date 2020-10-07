import React, { useState,useEffect } from 'react';
import Todo from  './Todo';
import { Button,FormControl,InputLabel,Input } from '@material-ui/core';
import { db } from './firebase';
import firebase from 'firebase';

function App() {
  const [arr,x]=useState([])
  const [ne ,setne]=useState('')

  useEffect(() =>{
    db.collection('data').orderBy('timestamp','desc').onSnapshot(snapshot=>{
      x(snapshot.docs.map(doc=>({id:doc.id,task: doc.data().task})))

    })
  },[]);

    const addtodo =(chag)=> {
    chag.preventDefault();
    // x([...arr,ne])//append in the previous list ...arr gets the prev list
    db.collection('data').add({
      task : ne,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setne('')// clear up the input
  }
  return (
    // const
    <div className="App">
      <h1> To Do App!</h1>
        <form>
          <FormControl>
              <InputLabel >Write Here.</InputLabel>
              <Input value={ne} onChange={chag => setne(chag.target.value)} />
          </FormControl>



          <Button disabled={!ne}  type='submit' onClick={addtodo} variant="contained">Add</Button>
        </form>
        {arr.map(elemen=>(
          <Todo task={elemen}/>//task is a new object now when we wanted the id of the field
        // <li>{elemen}</li>
        ))}
      
    </div>
  );
}

export default App;
