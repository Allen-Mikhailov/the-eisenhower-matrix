import { getJsonData, storeData } from '../modules/fsstorage.js';
import { useEffect, useState } from 'react';
import { store } from "../modules/store.js"

function FsDataChild({ datakey, name, checked })
{
    const [ data, setData ] = store.useState(name)
    const [ gotData, setGotData ] = useState(false)

    useEffect(() => {
      if (!checked) {return}

        getJsonData(datakey).then((d) => {
          setGotData(true)
          if (d)
            setData(d)
        })
      }, [checked])

      useEffect(() => {
        if (!gotData) {return}
        console.log("Stored "+name+": ", data)
        storeData(datakey, JSON.stringify(data)).then(() => { })
      }, [data])

    return <></>
}

function FsDataManager({ dataKeys })
{
  const [ checked, setChecked ] = useState(false)

  useEffect(() => {
    
  }, [])

  return <>
    {Object.keys(dataKeys).map(name => {
      <FsDataChild datakey={dataKeys[name]} name={name} checked={checked}/>
    })}
  </>
}

export default FsDataManager