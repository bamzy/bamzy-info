import './App.css';
import Navigation from './components/Sidebar';

function App() {
  return (
    <div className="App" id="outer_container">
      <Navigation  pageWrapId={'pages_container'} outerContainerId="outer_container"/>
      <div id="pages_container" className='pages-container'>
        <h1 style={{textAlign:'left'}}>Hi</h1>
      </div>
    </div>
  );
}

export default App;
