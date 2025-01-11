import './App.css';
import {useDispatch, useSelector} from "react-redux";
import { increment } from './Redux/reducer/counterReducer';
import { dicrement } from './Redux/reducer/counterReducer';
// import {increment} from "./Redux/reducer/counterReducer";//////////////

function App() {
  const dispatch = useDispatch();
  const selectValue = useSelector((state) => state.counter.value);
  return (
    <div className="App">
      <div className='w-screen h-screen bg-blue-800 text-white text-2xl font-medium text-center py-10'>
      <div>My value is {selectValue}</div>
      <button onClick={()=> dispatch( increment())} className='py-3 px-6 bg-green-700 mr-4 mt-8'>
        Increase
      </button>
      <button onClick={()=> dispatch (dicrement())} className='px-6 py-3 bg-green-700 ml-4'>
        Dicrement
      </button>
    </div>
    </div>

  );
}

export default App;
