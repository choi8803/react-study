import React from 'react';
import styles from './Counter.module.css';
import { increment, decrement } from '../storages/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.count);

  return (
    <div className={styles.counter}>
      <h1>Counter Component : {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>  
    </div>
  );
}

export default Counter;