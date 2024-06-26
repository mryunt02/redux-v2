import {useDispatch, useSelector} from 'react-redux';
import { decrement, increment, set } from './actions';
import { SetCounter } from './SetCounter';
import { bindActionCreators } from 'redux';
export const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const actions =bindActionCreators({ increment, decrement, set }, dispatch);
  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button onClick={()=>actions.increment()} >+</button>
      <button onClick={()=>actions.set(0)}>Reset</button> 
      <button onClick={()=>actions.decrement()}>-</button>
      <SetCounter />
    </div>
  );
}