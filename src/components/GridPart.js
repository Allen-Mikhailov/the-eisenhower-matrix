import { useState } from "react"

import "../scss/GridPart.scss"

const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function TaskInput({pos, index})
{
    const [taskText, setTaskText] = useState(`Task ${index}`)
    return <div id={pos+" "+index} className="TaskInput">
        <div className="outside-index">{index}</div>
        <input type="text" className="task-title" value={taskText} onChange={(e) => setTaskText(e.target.value)}></input>
    </div>
}

function GridPart({id})
{
    return <div id={id}>
        <div className="sugested-action">Do</div>
        {ids.map((index) => <TaskInput pos={id} index = {index} key={index}/>)}
    </div>
}

export default GridPart