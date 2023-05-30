import {useSelector, useDispatch} from 'react-redux'
import { decrementCount, incrementCount } from './redux/count/actions';

import './App.css';

function App() {
  // Get the current state
  const { currentCount } = useSelector(rootReducer => rootReducer.countReducer)

  // Change the state
  const dispatch = useDispatch();

  const handleIncrementCount = () => {
    dispatch(incrementCount())
  }

  const handleDecrementCount = () => {
    dispatch(decrementCount())
  }

  return (
    <div className="container">
        <div className="count-container">
          <h1 className='result'>{currentCount}</h1>
          <div className="button-container">
                  <button type="button" onClick={handleIncrementCount} className="btn">
                     Increment
                  </button>
                  <button type="button" onClick={handleDecrementCount} className="btn">
                     Decrement
                  </button>
               </div>
        </div>
    </div>
  );
}

export default App;
