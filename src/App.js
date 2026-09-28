import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import backgroundImage from "./images/One_Half_Dozen_Bagels.JPG";

function App() {
  return (
    <div className="App" style={{ width: "100vw", height: "50vh", margin: 0, padding: 0, top: 0, left: 0, position: "absolute", overflow: "hidden" }}>
      <img src={backgroundImage} style={{ backgroundColor: "#000", width: "100vw", height: "100vh", margin: 0, padding: 0, top: 0, left: 0, position: "absolute", zIndex: -1 }} />
      <div style={{ backgroundColor: "#000", width: "100vw", height: "100vh", margin: 0, padding: 0, top: 0, left: 0, position: "absolute", zIndex: 0, opacity: 0.9 }}></div>
      <div style={{ width: "100vw", height: "100vh", margin: 0, padding: 0, top: 0, left: 0, position: "absolute", zIndex: 1 }}>
        <Header /></div>
    </div>
  );
}

export default App;
