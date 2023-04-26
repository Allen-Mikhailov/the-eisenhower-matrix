import { useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import {useAuthState} from "react-firebase-hooks/auth"
import {useCollectionData} from "react-firebase-hooks/firestore"


import "./scss/index.scss"
import MatrixPage from "./pages/MatrixPage";
import SignInPage from "./pages/SignInPage";

const firebaseConfig = {
    apiKey: "AIzaSyDAX4rsB_5mhROVijx_mPWaUt0bNXSsmbI",
    authDomain: "the-eisenhower-matrix.firebaseapp.com",
    projectId: "the-eisenhower-matrix",
    storageBucket: "the-eisenhower-matrix.appspot.com",
    messagingSenderId: "851422289430",
    appId: "1:851422289430:web:4fbc8a7b856a460e31df37",
    measurementId: "G-M4SP3DPKQG"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

function App() {
  const [user] = true//useAuthState()


  return (
    <div className="App">
      <div id="title" className="title-font">EISENHOWER MATRIX</div>
      {user ? <MatrixPage/>:<SignInPage/>}
    </div>
  );
}

export default App;
