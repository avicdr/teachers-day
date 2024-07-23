import './App.css';
import Home from './components/Home';
import bgVideo from "./resource/bg.mp4"

function App() {
  return (
    <div className="App">
     <video src={bgVideo} id="background-video" autoPlay muted loop />
     <Home/>
    </div>
  );
}

export default App;
