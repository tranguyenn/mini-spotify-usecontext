import './App.css';
import Controller from './components/Controller';
import Header from './components/Header';
import Tracklist from './components/Tracklist';
import { MusicPlayerProvider } from './contexts/MusicPlayerContext';

function App() {
  return (
    <MusicPlayerProvider>
    <div className="App">
        <Header></Header>
        <Tracklist />
        <Controller />
    </div>
    </MusicPlayerProvider>
  );
}

export default App;
