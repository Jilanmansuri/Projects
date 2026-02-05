
import './App.css'
import Counter from "./components/counter";

function App() {
  return (
    <>
    <h1>Count</h1>
    <div className='countbox'>
      <div className='card3'><Counter initialValue={0} /></div>
      <div className='card3'><Counter initialValue={5} /></div>
      <div className='card3'><Counter initialValue={10} /></div>
    </div>
    </>
  );
}

export default App;
