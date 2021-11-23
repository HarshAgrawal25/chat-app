import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Writing from "./components/writing/Writing"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="container p-5">
        <Writing/>
      </div>
    </div>
  );
}

export default App;
