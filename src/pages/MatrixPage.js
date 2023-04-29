import { useState } from "react";

import GridPart from "../components/GridPart.js";
import GridTitle from "../components/GridTitle.js";

function MatrixPage()
{
    const [tasks, setTasks] = useState([[], [], [], []])

    function setListTasks(listID, newList)
    {
        tasks[listID] = newList
        setTasks(tasks)
        console.log(tasks)
    }

    return <div id = "mid-grid">
        <GridPart id="top-left-grid" action="Do" tasks={tasks[0]} setTasks={(newlist) => setListTasks(0, newlist)}>
            <GridTitle title="Urgent" pos="top"/>
            <GridTitle title="Important" pos="left"/>
        </GridPart>

        <GridPart id="top-right-grid" action="Schedule" tasks={tasks[1]} setTasks={(newlist) => setListTasks(1, newlist)}>
            <GridTitle title="Not Urgent" pos="top"/>
        </GridPart>

        <GridPart id="bottom-left-grid" action="Delegate" tasks={tasks[2]} setTasks={(newlist) => setListTasks(2, newlist)}>
            <GridTitle title="Not Important" pos="left"/>
        </GridPart>

        <GridPart id="bottom-right-grid" action="Delete" tasks={tasks[3]} setTasks={(newlist) => setListTasks(3, newlist)}/>
    </div>
}

export default MatrixPage