import './styles/App.scss';
import TopBar from './components/TopBar';
import SideBar from './components/SideBar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="container flex">
        <SideBar />
        <Home />
      </div>
    </div>
  );
}

export default App;
