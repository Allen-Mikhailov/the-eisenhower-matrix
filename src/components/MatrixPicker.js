import { auth, firestore } from "../modules/firebaseStuff";
import { store } from "../modules/store";
import { useState } from "react";

import "../scss/MatrixPicker.scss"

function MatrixPicker({createNewLocal, createNewFirebase})
{
    const [localMatrices] = store.useState("local-matrices")

    const [ open, setOpen ] = useState(false)


    return <div className={`matrix-picker ${ open? "open" : "closed" }`}>
        {/* <div className="matrix-picker-current">{"help"}</div> */}
        <div className="matrix-picker-tab" onClick={() => setOpen(!open)}></div>
        <div className="matrix-picker-container">
            <div className="matrix-picker-header">Local</div>
        </div>
    </div>
}

export default MatrixPicker