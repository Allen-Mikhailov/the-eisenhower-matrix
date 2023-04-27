import { useState, useEffect } from "react"

import "../scss/GridPart.scss"
import "../scss/vars.scss"

const ids = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


function TaskInput({pos, index, task, setTask})
{
    return <div id={pos+" "+index} className="TaskInput">
        <div className="outside-index">{index}</div>
        <input type="text" className="task-title" value={task} onChange={(e) => setTask(e.target.value)}></input>
    </div>
}

function GridPart({id, action, children, tasks, setTasks})
{
    return <div id={id}>
        <div className="sugested-action sub1-font">{action}</div>
        {ids.map((index) => <TaskInput pos={id} index = {index} key={index} 
            task={tasks[index-1]} setTask={(value) => setTasks(index-1, value)}/>)}
        {children}
    </div>
}

export default GridPart