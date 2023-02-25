import { Board } from "./Components/Board";
import './Styles/App.css'
import { Routes, Route } from "react-router-dom";
import CreateGame from "./ControllerComponents/CreateGame";
import { createGame } from "./Controller/controller";
import ConnectToWhite from "./ControllerComponents/ConnectToWhite";
import ConnectToBlack from "./ControllerComponents/ConnectToBlack";

export function App() {

  return (
    <div>
      <Routes>
        <Route path="/createGame" element={<CreateGame/>}/>
        <Route path="/game/:id" element={<Board />} />
        <Route path="/game/:id/:color" element={<Board />} />
        <Route path="/game/:id/connectToBlack" element={<ConnectToBlack/>}/>
        <Route path="/game/:id/connectToWhite" element={<ConnectToWhite/>}/>
      </Routes>
    </div>
  );
}

export default App;
