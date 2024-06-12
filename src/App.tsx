import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState, decrement, increment, incrementByAmount } from './store';

function App() {
  
  const { counter } = useSelector( (state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>count is { counter }</p>
        <button onClick={() => (dispatch(increment()))}>
          Increment
        </button>
        <button onClick={() => (dispatch(decrement()))}>
          Decrement
        </button>
        <button onClick={() => (dispatch(incrementByAmount(2)))}>
          Increment By 2
        </button>
      </div>
      
    </>
  )
}

export default App
