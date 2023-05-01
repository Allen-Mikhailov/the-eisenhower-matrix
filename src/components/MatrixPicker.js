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

function isSelected(currentMatrix, text, type)
{
    return (currentMatrix.id == text && currentMatrix.type == type )?"selected":"";
}

function MatrixPickerMatrix({text, type})
{

    const [currentMatrix, setCurrentMatrix ] = store.useState("current-matrix")

    function select()
    {
        setCurrentMatrix({"id": text, "type": type})
    }

    return <div className={`matrix-picker-matrix ${isSelected(currentMatrix, text, type)}`} onClick={select}>
        <div className="matrix-picker-matrix-text">
            {text}  
        </div>
    </div>
}

function MatrixPickerNewMatrix({onCreate})
{
    const [text, setText] = useState("")

    function create(text)
    {



        onCreate(text)
        setText("")
    }

    return <div className="matrix-picker-new-matrix">
        <div className="matrix-picker-new-matrix-container">
            <img src={PlusIcon} className="matrix-picker-new-matrix-button" onClick={() => create(text)}/>
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
    const [firebaseMatrices] = store.useState("firebase-matrices")

    const [ open, setOpen ] = useState(false)


    return <div className={`matrix-picker ${ open? "open" : "closed" }`}>
        {/* <div className="matrix-picker-current">{"help"}</div> */}
        <div className="matrix-picker-tab" onClick={() => setOpen(!open)}></div>
        <div className="matrix-picker-container">
            {auth.currentUser && <div>
                <MatrixPickerHeader text={auth.currentUser.displayName}/>
                {Object.keys(localMatrices).map((key) => {
                    return <MatrixPickerMatrix key={key} text={key} type="local"/>
                })}
                <MatrixPickerNewMatrix onCreate={createNewFirebase}/>
            </div>}
            <MatrixPickerHeader text={"local"}/>
            {Object.keys(localMatrices).map((key) => {
                return <MatrixPickerMatrix key={key} text={key} type="local"/>
            })}
            <MatrixPickerNewMatrix onCreate={createNewLocal}/>
        </div>
    </div>
}

export default MatrixPicker