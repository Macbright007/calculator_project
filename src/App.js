import './App.css';
import BoardButton from './components/BoardButton';
import Screen from './components/Screen';

const App = () => {

  return (
    <div className="App">
      <h1>Calculator</h1>
      <Screen />
      <BoardButton />
    </div>
  );
}

export default App;
