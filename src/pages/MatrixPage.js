import { useState } from "react";

import GridPart from "../components/GridPart.js";
import GridTitle from "../components/GridTitle.js";

function MatrixPage({matrix, updateMatrix})
{

    function setListTasks(quadrant, newList)
    {
        const newmatrix = {...matrix}
        newmatrix[quadrant] = newList
        updateMatrix(newmatrix)
        console.log(newmatrix)
    }

    return (matrix && <div id = "mid-grid">
        <GridPart id="top-left-grid" action="Do" tasks={matrix["top-left"]} 
            setTasks={(newlist) => setListTasks("top-left", newlist)}>
            <GridTitle title="Urgent" pos="top"/>
            <GridTitle title="Important" pos="left"/>
        </GridPart>

        <GridPart id="top-right-grid" action="Schedule" tasks={matrix["top-right"]} 
            setTasks={(newlist) => setListTasks("top-right", newlist)}>
            <GridTitle title="Not Urgent" pos="top"/>
        </GridPart>

        <GridPart id="bottom-left-grid" action="Delegate" tasks={matrix["bottom-left"]} 
            setTasks={(newlist) => setListTasks("bottom-left", newlist)}>
            <GridTitle title="Not Important" pos="left"/>
        </GridPart>

        <GridPart id="bottom-right-grid" action="Delete" tasks={matrix["bottom-right"]} 
            setTasks={(newlist) => setListTasks("bottom-right", newlist)}/>
    </div>)
}

export default MatrixPage