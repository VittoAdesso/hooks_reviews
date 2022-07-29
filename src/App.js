import './App.css';
import ShowContent from './components/hookUseState/showContent';
import BeerTime from './components/hookUseState/beerTime';

function App() {
  return (
    // TODO: routers || links into a nav bar 
    <div className="App">
      <ShowContent message="Vittoooo, you got It!"/>
      <hr/>
      <BeerTime message="Beer Time my Friend"/>
      <hr/>
    </div>
  );
}

export default App;
