import {useDispatch, useSelector} from 'react-redux';
import { decrement, increment, set } from './actions';
export const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={()=>dispatch(increment())} >+</button>
      <button onClick={()=>dispatch(set(0))}>Reset</button> 
      <button onClick={()=>dispatch(decrement())}>-</button>
    </div>
  );
}