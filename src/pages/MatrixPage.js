import GridPart from "../components/GridPart.js";
import GridTitle from "../components/GridTitle.js";

function MatrixPage()
{
    return <div id = "mid-grid">
        <GridPart id="top-left-grid" action="Do">
            <GridTitle title="Urgent" pos="top"/>
            <GridTitle title="Important" pos="left"/>
        </GridPart>

        <GridPart id="top-right-grid" action="Schedule">
            <GridTitle title="Not Urgent" pos="top"/>
        </GridPart>

        <GridPart id="bottom-left-grid" action="Delegate">
            <GridTitle title="Not Important" pos="left"/>
        </GridPart>

        <GridPart id="bottom-right-grid" action="Delete"/>
    </div>
}

export default MatrixPage