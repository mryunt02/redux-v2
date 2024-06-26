import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { set } from './actions';
export const SetCounter = () => {

  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  return (
    <section>
      <form onSubmit={(e)=>{
        e.preventDefault();
        dispatch(set(count))
      }}>
        <label htmlFor="set-to">Set count</label>
        <input id='set-to' type="number" onChange={(e)=>{setCount(e.target.value)}}/>
        <button type="submit" >Set</button>
      </form>
    </section>
  );
}