import "../scss/GridPart.scss"

function GridTitle({title, pos})
{
    return <div className={`grid-title sub2-font ${pos}`}><div className={`text`}>{title}</div></div>
}

export default GridTitle