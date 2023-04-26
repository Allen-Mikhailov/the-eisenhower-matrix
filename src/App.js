import { auth, firestore } from "./modules/firebaseStuff";

import { useEffect } from "react";

import {useAuthState} from "react-firebase-hooks/auth"

import "./scss/index.scss"
import MatrixPage from "./pages/MatrixPage";
import SignInPage from "./pages/SignInPage";


function App() {
  const [user] = [true]//useAuthState()


  return (
    <div className="App">
      <div id="title" className="title-font">EISENHOWER MATRIX</div>
      {user ? <MatrixPage/>:<SignInPage/>}
    </div>
  );
}

export default App;
