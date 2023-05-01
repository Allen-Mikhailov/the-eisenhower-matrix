import { auth, firestore } from "./modules/firebaseStuff";
import { store } from "./modules/store.js"
import FsDataManager from "./components/FsDataManager";

import { useEffect } from "react";

import {useAuthState} from "react-firebase-hooks/auth"

import "./scss/index.scss"
import "./scss/scroll-bars.scss"
import MatrixPage from "./pages/MatrixPage";
import UserHeader from "./components/UserHeader";

import MatrixPicker from "./components/MatrixPicker";

store.setState("local-matrices", {})
store.setState("settings", {})

store.setState("current-matrix", {
  "type": "local",
  "id": undefined
})

const datakeys = {
  "local-matrices": "local-matrices:0.0", 
  "settings": "settings:0.0"
}

function EmptyMatrix()
{
  return {"top-left": [], "top-right": [], "bottom-left": [], "bottom-right": []}
}

function App() {
  const [user] = useAuthState(auth)

  const [localMatrices, setLocalMatrices, updateLocalMatricies] = store.useState("local-matrices")

  function createLocalMatrix({text})
  {
    updateLocalMatricies((matrices) => {
      const newMatrix = EmptyMatrix()
      matrices[text] = newMatrix;
      return matrices
    })
  }

  return (
    <div className="App">
      <FsDataManager dataKeys={datakeys}/>
      <MatrixPicker createNewLocal={createLocalMatrix}/>
      <div id="title" className="title-font">EISENHOWER MATRIX</div>
      <UserHeader user={user}/>
      <MatrixPage/>
    </div>
  );
}

export default App;
