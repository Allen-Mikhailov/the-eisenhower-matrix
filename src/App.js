import { auth, firestore } from "./modules/firebaseStuff";

import { useEffect } from "react";

import {useAuthState} from "react-firebase-hooks/auth"

import "./scss/index.scss"
import MatrixPage from "./pages/MatrixPage";
import SignInPage from "./pages/SignInPage";
import UserHeader from "./components/UserHeader";

function App() {
  const [user] = useAuthState(auth)


  return (
    <div className="App">
      <div id="title" className="title-font">EISENHOWER MATRIX</div>
      <UserHeader user={user}/>
      {user ? <MatrixPage/>:<SignInPage/>}
    </div>
  );
}

export default App;
