import './App.css';
import FirstMethod from './components/FirstMethod'
import SecondMethod from './components/SecondMethod';
import ThirtMethod from './components/ThirtMethod';
import FourthMethod from './components/FourthMethod';
import Counter from './components/Counter';
import Selection from './components/Selection';

function App() {
  return (
    <div className="App">
      <div>
      <FirstMethod/>
     <SecondMethod/>
     <ThirtMethod/>
     <FourthMethod/>
      </div>
     <div>
     <Counter/>
     <Selection/>
     </div>
    </div>
  );
}

export default App;
