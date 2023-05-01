import { auth, firestore } from "../modules/firebaseStuff";
import { store } from "../modules/store";
import { useState } from "react";

import "../scss/MatrixPicker.scss"
import PlusIcon from "../imgs/plus.png"

function MatrixPickerHeader({text})
{
    return <div className="matrix-picker-header">
        <div className="matrix-picker-header-text">
            {text}  
        </div>
    </div>
}

function MatrixPickerMatrix({text})
{
    return <div className="matrix-picker-header">
        <div className="matrix-picker-header-text">
            {text}  
        </div>
    </div>
}

function MatrixPickerNewMatrix({onCreate})
{
    const [text, setText] = useState("")

    return <div className="matrix-picker-new-matrix">
        <div className="matrix-picker-new-matrix-container">
            <img src={PlusIcon} className="matrix-picker-new-matrix-button" onClick={() => onCreate(text)}/>
        </div>

        <input 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        className="matrix-picker-new-matrix-input" 
        placeholder="New Matrix"/>
    </div>

}

function MatrixPicker({createNewLocal, createNewFirebase})
{
    const [localMatrices] = store.useState("local-matrices")

    const [ open, setOpen ] = useState(false)


    return <div className={`matrix-picker ${ open? "open" : "closed" }`}>
        {/* <div className="matrix-picker-current">{"help"}</div> */}
        <div className="matrix-picker-tab" onClick={() => setOpen(!open)}></div>
        <div className="matrix-picker-container">
            {auth.currentUser && <div>
                <MatrixPickerHeader text={auth.currentUser.displayName}/>
                {Object.keys(localMatrices).map((key => {
                    return <MatrixPickerMatrix text={key}/>
                }))}
                <MatrixPickerNewMatrix onCreate={createNewLocal}/>
            </div>}
            <MatrixPickerHeader text={"local"}/>
            {Object.keys(localMatrices).map((key => {
                return <MatrixPickerMatrix text={key}/>
            }))}
            <MatrixPickerNewMatrix onCreate={createNewLocal}/>
        </div>
    </div>
}

export default MatrixPicker